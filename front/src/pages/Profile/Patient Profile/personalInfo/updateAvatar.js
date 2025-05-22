import { Button, Modal } from "antd";
import React, { useState } from "react";
import ImageUploads from "../../../../components/imageUploads.js";
import Swal from "sweetalert2";
import axios from "axios";

function UpdateAvatar({
  loading,
  openAvatarModal,
  setOpenAvatarModal,
  modalContent,
  refresh,
  setLoading,
}) {
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [imagePublicIds, setImagePublicIds] = useState([]);
  const [deleteAvatar, setDeleteAvatar] = useState(false);

  React.useEffect(() => {
    if (modalContent) {
      setImageUrls(modalContent.avatar ? [modalContent.avatar] : []);
      setImagePublicIds(modalContent.avatarId ? [modalContent.avatarId] : []);
    }
  }, [modalContent]);

  const handleSubmitAvatarUpdate = async ({ avatar, avatarId }) => {
    setLoading(true);
    try {
      const payload = deleteAvatar
        ? { avatar: "", avatarId: "" }
        : { avatar: avatar, avatarId: avatarId };
      const res = await axios.put(
        `update-user-avatar?id=${modalContent._id}`,
        payload
      );
      if (res.data.success) {
        setOpenAvatarModal(false);
        Swal.fire({
          icon: "success",
          title: "Avatar updated successfully!",
        });
        refresh();
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "An unexpected error occurred. Please try again later.";

      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (deleteAvatar) {
      return handleSubmitAvatarUpdate({ avatar: "", avatarId: "" });
    }

    if (imageUrls.length === 0 || imagePublicIds.length === 0) {
      return Swal.fire({
        icon: "warning",
        title: "No image selected!",
        text: "Please upload a profile picture before saving.",
      });
    }

    // Submit only the first image and its ID for the avatar
    handleSubmitAvatarUpdate({
      avatar: imageUrls[0],
      avatarId: imagePublicIds[0],
    });
  };

  const canSubmit =
    deleteAvatar || (imageUrls.length > 0 && imagePublicIds.length > 0);

  return (
    <Modal
      footer={null}
      open={openAvatarModal}
      onCancel={() => setOpenAvatarModal(false)}
      confirmLoading={loading}
      width={450}
      style={{ maxWidth: "95vw" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ImageUploads
          setImageUploading={setImageUploading}
          imageUrls={imageUrls}
          imagePublicIds={imagePublicIds}
          setLoading={setLoading}
          setImagePublicIds={setImagePublicIds}
          setImageUrls={setImageUrls}
          setDeleteAvatar={setDeleteAvatar}
        />{" "}
        {canSubmit && (
          <Button onClick={handleSubmit} disabled={imageUploading || loading}>
            {loading ? "Saving..." : "Save Avatar"}
          </Button>
        )}
      </div>
    </Modal>
  );
}

export default UpdateAvatar;
