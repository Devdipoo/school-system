import { useState } from 'react';
import PropTypes from 'prop-types';
import cutIcon from '../../../assets/cutIcon.svg';

function EditProfileDetail({ initialValue, onClose, onUpdate }) {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    onUpdate(formData);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="fixed inset-0 flex items-center justify-center overflow-auto">
          <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex justify-between">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Edit Details
                </h2>
                <img
                  className="h-6 w-6 cursor-pointer"
                  src={cutIcon}
                  alt="Cut icon"
                  onClick={onClose}
                />
              </div>
              <form className="flex flex-wrap" onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <label className="block font-bold ml-2">
                      {key.toUpperCase()}
                    </label>
                    <input
                      className="outline-1 border border-black p-2 m-2 rounded-sm"
                      type="text"
                      value={value}
                      onChange={handleChange}
                      name={key}
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
EditProfileDetail.propTypes = {
  initialValue: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EditProfileDetail;
