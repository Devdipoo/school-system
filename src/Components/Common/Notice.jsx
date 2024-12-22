import { useState } from "react";

function Notice() {
  // Static notices array without backend fetch
  const [notices] = useState([
    {
      title: "Notice 1",
      date: "2024-12-21T12:00:00Z",
      details: "Details of the first notice.",
      post: "Admin",
    },
    {
      title: "Notice 2",
      date: "2024-12-20T12:00:00Z",
      details: "Details of the second notice.",
      post: "Admin",
    },
    // Add more static notices as needed
  ]);

  return (
    <div className="w-full p-20">
      <h1 className="text-3xl font-bold mb-6">Published Notices</h1>
      {notices
        .slice(0)
        .reverse()
        .map((notice, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded bg-gray-50 p-6 mb-4"
          >
            <h2 className="text-xl font-semibold mb-2">{notice.title}</h2>
            <p className="text-sm text-gray-600">
              Date of Issue: {notice.date.substring(0, 10)}
            </p>
            <p className="mt-4">{notice.details}</p>
            <p className="text-sm text-gray-600 mt-4">
              Issued by: {notice.post}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Notice;
