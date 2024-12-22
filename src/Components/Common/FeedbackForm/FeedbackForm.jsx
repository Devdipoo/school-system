import { useState } from 'react'

function FeedbackForm() {
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Here you can handle the submission of the feedback, for example, sending it to a backend API
    console.log('Feedback submitted:', feedback)
    // You can reset the form after submission if needed
    setFeedback('')
  }

  const handleChange = (event) => {
    setFeedback(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap">
      <label htmlFor="feedback" className="block font-bold ml-2">
        Feedback:
      </label>
      <textarea
        id="feedback"
        className="outline-1 border border-black p-2 m-2 rounded-sm"
        rows="4"
        value={feedback}
        onChange={handleChange}
        placeholder="Type your feedback here..."
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Feedback
      </button>
    </form>
  )
}

export default FeedbackForm
