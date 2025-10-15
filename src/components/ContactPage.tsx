import React, { useState, Component } from 'react'
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react'
import emailjs from '@emailjs/browser'
const ContactPage = () => {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zipCode: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: '',
  })
  // Form handlers
  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setLoading(true)
    setNotification({
      show: false,
      type: '',
      message: '',
    })
    try {
      // Note: You need to replace these with your actual EmailJS service ID, template ID, and public key
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          to_name: 'Ratebeat Team',
          from_email: formData.email,
          phone: formData.phone,
          city: formData.city,
          state: formData.state,
          zip_code: formData.zipCode,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY',
      )
      setNotification({
        show: true,
        type: 'success',
        message: 'Message sent successfully!',
      })
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        zipCode: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
      console.error('EmailJS error:', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        {/* Background decorative elements */}
        <div className="absolute left-0 bottom-0 w-1/4 h-full opacity-20">
          <div className="absolute w-64 h-64 rounded-full bg-blue-400 -left-20 -bottom-20"></div>
          <div className="absolute w-48 h-48 rounded-full bg-blue-300 left-20 bottom-10"></div>
          <div className="absolute w-32 h-32 rounded-full bg-blue-200 left-40 bottom-40"></div>
        </div>
        <div className="absolute right-0 top-0 w-1/4 h-full opacity-20">
          <div className="absolute w-64 h-64 rounded-full bg-green-400 -right-20 -top-20"></div>
          <div className="absolute w-48 h-48 rounded-full bg-teal-300 right-20 top-40"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            For solutions to your mortgage and refinance needs.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-10">
          <p className="text-gray-600">
            If you have questions on your mortgage options or a refinance we are
            at your service. Here is how to reach us:
          </p>
        </div>
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-3 rounded-full mb-4">
              <PhoneIcon className="text-blue-500" size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
            <p className="text-blue-500 text-center">(877) 877-7575</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-3 rounded-full mb-4">
              <MailIcon className="text-blue-500" size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
            <p className="text-blue-500 text-center">info@ratebeat.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-3 rounded-full mb-4">
              <MapPinIcon className="text-blue-500" size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600 text-center">
              9400 Topanga Canyon Blvd #210,
              <br />
              Chatsworth, CA 91311, USA
            </p>
          </div>
        </div>
        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h3 className="text-xl font-medium text-center mb-6">
            Just complete the form below and let us know how we can help you.
            Our mortgage specialist will get in touch with you.
          </h3>
          {/* Notification */}
          {notification.show && (
            <div
              className={`mb-6 p-4 rounded-md ${notification.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}
            >
              {notification.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Do make sure you include your phone number and email address.
            However, please do not include any confidential information in this
            form.
          </p>
        </div>
      </div>
    
    </div>
  )
}
export default ContactPage
