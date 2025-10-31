import { useState } from "react";
import ProfileAvatar from "../components/ProfileAvatar";
import InputField from "../components/InputField";
import LogoutButton from "../components/LogoutButton";
import userB from "../assets/images/userB.png";

const PersonalInfoPage = () => {
  const [userData, setUserData] = useState({
    name: "ALi Alaa",
    phone: "0164466577",
    email: "ali@gmail.com",
    profileImage: userB,
  });

  const [hasChanges, setHasChanges] = useState(false);
  const [resetEdit, setResetEdit] = useState(false);

  const handleInputChange = (field, value, resetSave = false) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
    if (resetSave) {
      setHasChanges(false);
    } else {
      setHasChanges(true);
    }
  };

  const handleSaveChanges = async () => {
    console.log("Saving changes:", userData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setHasChanges(false);
    setResetEdit(true);
    setTimeout(() => setResetEdit(false), 10);
    alert("Changes saved successfully!");
  };

  return (
    <div className="min-h-screen p-4 sm:px-6 md:px-8 lg:w-[907px] ml-0 lg:ml-[65px]">
      <h1 className="text-[var(--Secondary)] text-[28px] sm:text-[34px] md:text-[40px] font-semibold mb-8 text-center md:text-left">
        Personal Info
      </h1>

      <div>
        <div className="flex flex-col items-center md:items-start mb-6">
          <ProfileAvatar
            imageUrl={userData.profileImage}
            onImageChange={() => console.log("Change image")}
          />
        </div>

        <div className="border border-[var(--Secondary)] p-4 sm:p-6 md:p-8 rounded-xl">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <InputField
                label="Name"
                value={userData.name}
                onChange={(newValue, resetSave) =>
                  handleInputChange("name", newValue, resetSave)
                }
                resetEdit={resetEdit}
              />
              <InputField
                label="Phone"
                value={userData.phone}
                onChange={(newValue, resetSave) =>
                  handleInputChange("phone", newValue, resetSave)
                }
                type="tel"
                resetEdit={resetEdit}
              />
            </div>

            <div className="md:w-[48%] w-full">
              <InputField
                label="Email"
                value={userData.email}
                onChange={(newValue, resetSave) =>
                  handleInputChange("email", newValue, resetSave)
                }
                type="email"
                resetEdit={resetEdit}
              />
            </div>
          </div>

          <button
            onClick={handleSaveChanges}
            disabled={!hasChanges}
            className={`w-full py-3 mt-8 rounded-lg text-[16px] font-semibold transition-all duration-300
              ${
                hasChanges
                  ? "bg-[var(--Secondary)] text-[var(--Primary)] hover:opacity-90"
                  : "bg-[#7F7F7F] text-[var(--Primary)] cursor-not-allowed"
              }`}
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-start mt-6">
        <LogoutButton onClick={() => console.log("Logging out...")} />
      </div>
    </div>
  );
};

export default PersonalInfoPage;
