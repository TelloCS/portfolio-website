import { useContactForm } from "./useContactForm";

export default function Contact() {
  const {
    formData,
    handleChange,
    handleSubmit,
    isPending,
    isSuccess,
    isError,
    errorMessage
  } = useContactForm();

  const inputClasses = "block w-full p-2.5 text-sm border rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-gray-400";

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-160px)] sm:min-h-[calc(100dvh-128px)] p-4 sm:p-6">
      <div className="w-full max-w-[650px] p-6 sm:p-10 border-0 sm:border rounded-3xl flex flex-col items-center justify-center">

        <div className="w-full flex flex-col items-center text-center mb-6">
          <h2 className="text-2xl font-bold">Contact me</h2>
        </div>

        {isSuccess && (
          <div className="w-full mb-6 p-4 text-sm text-green-700 bg-green-100 rounded-md">
            Message sent successfully! I'll get back to you very soon.
          </div>
        )}

        {isError && (
          <div className="w-full mb-6 p-4 text-sm text-red-700 bg-red-100 rounded-md">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              tabIndex={-1}
              autoComplete="off"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Email"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={inputClasses}
              placeholder="How can I help you?"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2.5 px-4 text-sm font-medium border rounded-lg mt-2 hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer hover:bg-[#A6AEC8] hover:text-[#21222D]"
          >
            {isPending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}