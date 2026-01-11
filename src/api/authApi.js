const BASE_URL = "";

export const forgetPassword = async (email) => {
  const response = await fetch(`${BASE_URL}/forgetPassword`, {
    method: "POST",
   
  });
  return re.json();
};

export const verifyOtp = async (email, otp) => {
  const res = await fetch(`${BASE_URL}/verifyOtp`);
};
