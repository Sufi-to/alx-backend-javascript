import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    const nophoto = null;
    const nouser = null;
    return { photo: nophoto, user: nouser };
  }
}
