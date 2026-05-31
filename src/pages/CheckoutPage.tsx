import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { saveOrder } from '../services/orderService'
import type { Customer } from '../types/customer'
import { formatPrice } from '../utils/formatPrice'

type FormState = Customer & { dummy: boolean }

const EMPTY_FORM: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: '',
  dummy: false,
}

type FieldErrors = Partial<Record<keyof FormState, string>>

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})

  const shipping = subtotal >= 599 ? 0 : 49
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <section className="checkout-page">
        <h1>Checkout</h1>
        <p>Din kurv er tom. <Link to="/products">Gå til shop</Link></p>
      </section>
    )
  }

  function validate(): boolean {
    const e: FieldErrors = {}
    if (!form.firstName.trim()) e.firstName = 'Fornavn er paakraevet'
    if (!form.lastName.trim()) e.lastName = 'Efternavn er paakraevet'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Ugyldig e-mailadresse'
    }
    if (!form.address?.trim()) e.address = 'Adresse er paakraevet'
    if (!form.city?.trim()) e.city = 'By er paakraevet'
    if (!form.postalCode?.trim()) e.postalCode = 'Postnummer er paakraevet'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      const customer: Customer = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        postalCode: form.postalCode,
      }
      const orderId = await saveOrder({
        customer,
        items: items.map(({ product, quantity }) => ({ product, quantity })),
        total,
        createdAt: new Date().toISOString(),
      })
      clearCart()
      navigate('/confirmation', { state: { orderId, customer, items, total } })
    } catch {
      alert('Der opstod en fejl. Proev igen.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleChange(key: keyof Customer) {
    return (ev: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: ev.target.value }))
  }

  return (
    <section className="checkout-page">
      <h1 className="checkout-page__title">Checkout</h1>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <h2 className="checkout-form__section-title">Leveringsinformation</h2>

          <div className="form-row form-row--two">
            <div className="form-field">
              <label htmlFor="firstName">Fornavn *</label>
              <input id="firstName" type="text" value={form.firstName} onChange={handleChange('firstName')} />
              {errors.firstName && <p className="form-error">{errors.firstName}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Efternavn *</label>
              <input id="lastName" type="text" value={form.lastName} onChange={handleChange('lastName')} />
              {errors.lastName && <p className="form-error">{errors.lastName}</p>}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="email">E-mail *</label>
            <input id="email" type="email" value={form.email} onChange={handleChange('email')} />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Telefon</label>
            <input id="phone" type="tel" value={form.phone ?? ''} onChange={handleChange('phone')} />
          </div>

          <div className="form-field">
            <label htmlFor="address">Adresse *</label>
            <input id="address" type="text" value={form.address ?? ''} onChange={handleChange('address')} />
            {errors.address && <p className="form-error">{errors.address}</p>}
          </div>

          <div className="form-row form-row--two">
            <div className="form-field">
              <label htmlFor="postalCode">Postnummer *</label>
              <input id="postalCode" type="text" value={form.postalCode ?? ''} onChange={handleChange('postalCode')} />
              {errors.postalCode && <p className="form-error">{errors.postalCode}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="city">By *</label>
              <input id="city" type="text" value={form.city ?? ''} onChange={handleChange('city')} />
              {errors.city && <p className="form-error">{errors.city}</p>}
            </div>
          </div>

          <button type="submit" className="btn btn--primary checkout-form__submit" disabled={submitting}>
            {submitting ? 'Afgiver ordre...' : `Afgiv ordre - ${formatPrice(total)}`}
          </button>

          <p className="checkout-form__note">
            Du betaler ikke med kort. Ordren afgives og vi kontakter dig vedr. betaling.
          </p>
        </form>

        <aside className="checkout-summary">
          <h2 className="cart-summary__title">Din ordre</h2>
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="checkout-summary__item">
              <span>{product.name} x{quantity}</span>
              <span>{formatPrice(product.price * quantity)}</span>
            </div>
          ))}
          <div className="cart-summary__row">
            <span>Fragt</span>
            <span>{shipping === 0 ? 'Gratis' : formatPrice(shipping)}</span>
          </div>
          <div className="cart-summary__row cart-summary__row--total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
