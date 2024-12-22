import { useState } from "react";

function AdminNotice() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authority, setAuthority] = useState("");
  const [notices, setNotices] = useState([
    // Hardcoded notices (for demonstration purposes)
    {
      _id: "1",
      title: "Notice 1",
      date: "2024-12-21",
      content: "Content of notice 1",
      authority: "Principal",
    },
    {
      _id: "2",
      title: "Notice 2",
      date: "2024-12-20",
      content: "Content of notice 2",
      authority: "Vice Principal",
    },
  ]);

  const handleDelete = (noticeId) => {
    // Filter out the deleted notice from the notices state
    const updatedNotices = notices.filter((notice) => notice._id !== noticeId);
    setNotices(updatedNotices);
    alert("Notice deleted successfully!");
  };

  const handlePublish = (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    const today = new Date().toISOString().slice(0, 10); // Gets today's date in YYYY-MM-DD format

    const noticeData = {
      _id: new Date().getTime().toString(), // Generate a unique ID
      title,
      date: today,
      content,
      authority,
    };

    // Add the new notice to the notices state
    setNotices([noticeData, ...notices]);

    alert("Notice published successfully!");

    // Clear form fields
    setTitle("");
    setContent("");
    setAuthority("");
  };

  return (
    <div>
      <div className="w-full p-20">
        <h1 className="text-3xl font-bold mb-6">Admin Notice Board</h1>

        <form onSubmit={handlePublish} className="grid grid-cols-1 gap-6">
          <input
            type="text"
            className="p-2 border-gray-300 border rounded shadow-sm"
            placeholder="Title of the Notice"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full p-2 border-gray-300 border rounded shadow-sm"
            placeholder="Content of the Notice"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
          />

          <select
            className="p-2 border-gray-300 border rounded shadow-sm"
            required
            value={authority}
            onChange={(e) => setAuthority(e.target.value)}
          >
            <option value="">Select Authority</option>
            <option value="Principal">Principal</option>
            <option value="Vice Principal">Vice Principal</option>
            <option value="Manager">Manager</option>
          </select>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Publish Notice
          </button>
        </form>
      </div>
      <div className="w-full  p-20">
        <h1 className="text-3xl font-bold mb-6">Published Notices</h1>
        {notices
          .slice(0)
          .reverse()
          .map((notice, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded bg-gray-50 p-6 mb-4"
            >
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold mb-2">{notice.title}</h2>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(notice._id)}
                >
                  Delete
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Date of Issue: {notice.date}
              </p>
              <p className="mt-4">{notice.content}</p>
              <p className="text-sm text-gray-600 mt-4">
                Issued by: {notice.authority}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AdminNotice;
