'use client'

import { useState } from 'react'

type ProfileFormProps = {
  initialData: {
    firstName?: string
    lastName?: string
    phoneNumber?: string
    email?: string
    website?: string
    blog?: string
    residence?: string
    residenceIt?: string
    desiredProfession?: string
    description?: string
    descriptionIt?: string
    drivingLicense?: string
    protectedCategory?: boolean
    photoUrl?: string
  }
}

export default function ProfileForm({ initialData }: ProfileFormProps) {
  const [form, setForm] = useState({
    phoneNumber: initialData.phoneNumber ?? '',
    email: initialData.email ?? '',
    website: initialData.website ?? '',
    blog: initialData.blog ?? '',
    residence: initialData.residence ?? '',
    residenceIt: initialData.residenceIt ?? '',
    desiredProfession: initialData.desiredProfession ?? '',
    description: initialData.description ?? '',
    descriptionIt: initialData.descriptionIt ?? '',
    drivingLicense: initialData.drivingLicense ?? '',
    protectedCategory: initialData.protectedCategory ?? false,
    photoUrl: initialData.photoUrl ?? '',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function updateField(
    key: keyof typeof form,
    value: string | boolean
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')

    try {
      const response = await fetch('/api/admin/me', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        setError(data?.error || 'Failed to save profile')
        return
      }

      setMessage('Profile updated successfully')
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Phone number</label>
          <input
            className="w-full rounded-xl border px-3 py-2"
            value={form.phoneNumber}
            onChange={(e) => updateField('phoneNumber', e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border px-3 py-2"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Website</label>
          <input
            className="w-full rounded-xl border px-3 py-2"
            value={form.website}
            onChange={(e) => updateField('website', e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Blog</label>
          <input
            className="w-full rounded-xl border px-3 py-2"
            value={form.blog}
            onChange={(e) => updateField('blog', e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Residence</label>
          <input
            className="w-full rounded-xl border px-3 py-2"
            value={form.residence}
            onChange={(e) => updateField('residence', e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Residence IT</label>
          <input
            className="w-full rounded-xl border px-3 py-2"
            value={form.residenceIt}
            onChange={(e) => updateField('residenceIt', e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Desired profession</label>
          <input
            className="w-full rounded-xl border px-3 py-2"
            value={form.desiredProfession}
            onChange={(e) => updateField('desiredProfession', e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Driving license</label>
          <input
            className="w-full rounded-xl border px-3 py-2"
            value={form.drivingLicense}
            onChange={(e) => updateField('drivingLicense', e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium">Photo URL</label>
          <input
            className="w-full rounded-xl border px-3 py-2"
            value={form.photoUrl}
            onChange={(e) => updateField('photoUrl', e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium">Description</label>
          <textarea
            className="min-h-28 w-full rounded-xl border px-3 py-2"
            value={form.description}
            onChange={(e) => updateField('description', e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium">Description IT</label>
          <textarea
            className="min-h-28 w-full rounded-xl border px-3 py-2"
            value={form.descriptionIt}
            onChange={(e) => updateField('descriptionIt', e.target.value)}
          />
        </div>

        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={form.protectedCategory}
            onChange={(e) => updateField('protectedCategory', e.target.checked)}
          />
          Protected category
        </label>
      </div>

      {message ? <p className="text-sm text-green-600">{message}</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl border px-4 py-2 font-medium"
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
}