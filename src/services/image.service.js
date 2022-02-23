import axios from "axios";
export async function postImage(image) {
  try {
    return await axios.post(
      "https://api.cloudinary.com/v1_1/worldseed/image/upload",
      image
    );
  } catch (error) {
    return false;
  }
}
