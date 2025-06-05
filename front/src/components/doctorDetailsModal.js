import React from "react";
import { Col, Modal, Row, Spin, Card, Avatar } from "antd";

function DoctorDetailsModal({
  openDoctorModal,
  setOpenDoctorModal,
  loading,
  doctorPracticeData,
  doctorLoading,
  doctorProfessionalData,
  doctorUserData,
}) {
  return (
    <Modal
      footer={null}
      open={openDoctorModal}
      onCancel={() => setOpenDoctorModal(false)}
      width={950}
      confirmLoading={loading}
      style={{ maxWidth: "95vw" }}
    >
      {doctorLoading ? (
        <Spin tip="Loading..." />
      ) : (
        <div style={{ padding: "12px" }}>
          <Row gutter={[24, 24]}>
            {/* Avatar and Basic Info */}
            <Col span={24}>
              <Card>
                <Row align="middle" gutter={16}>
                  <Col>
                    <Avatar size={80} src={doctorUserData?.avatar}>
                      {doctorUserData?.firstName?.[0]}
                      {doctorUserData?.lastName?.[0]}
                    </Avatar>
                  </Col>
                  <Col>
                    <h2>
                      {doctorUserData?.firstName} {doctorUserData?.lastName}
                    </h2>
                    <p>
                      <strong>Gender:</strong> {doctorUserData?.gender}
                    </p>
                    <p>
                      <strong>Phone:</strong> {doctorUserData?.phoneNumber}
                    </p>
                    <p>
                      <strong>Email:</strong> {doctorUserData?.email}
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Professional Info */}
            <Col span={12}>
              <Card title="Professional Details">
                <p>
                  <strong>Specialty:</strong>{" "}
                  {doctorProfessionalData?.specialty?.join(", ")}
                </p>
                <p>
                  <strong>Years of Experience:</strong>{" "}
                  {doctorProfessionalData?.yearsOfExperience}
                </p>
                <p>
                  <strong>Medical License No.:</strong>{" "}
                  {doctorProfessionalData?.medicalLicenseNumber}
                </p>
                <p>
                  <strong>Languages Spoken:</strong>{" "}
                  {doctorProfessionalData?.languagesSpoken?.join(", ")}
                </p>
                <p>
                  <strong>Board Certifications:</strong>
                </p>
                <ul>
                  {doctorProfessionalData?.boardCertifications?.map(
                    (cert, index) => (
                      <li key={index}>{cert}</li>
                    )
                  )}
                </ul>
              </Card>
            </Col>

            {/* Education Info */}
            <Col span={12}>
              <Card title="Education">
                {doctorProfessionalData?.education?.map((edu, index) => (
                  <div key={index} style={{ marginBottom: 12 }}>
                    <p>
                      <strong>Bachelor's:</strong> {edu.bachelorsDegree}
                    </p>
                    <p>
                      <strong>Medical School:</strong> {edu.medicalSchool}
                    </p>
                    <p>
                      <strong>Residency:</strong> {edu.residency}
                    </p>
                    <p>
                      <strong>Certification:</strong> {edu.certification}
                    </p>
                  </div>
                ))}
              </Card>
            </Col>

            {/* Practice Info */}
            <Col span={12}>
              <Card title="Practice Info">
                <p>
                  <strong>Practice Name:</strong>{" "}
                  {doctorPracticeData?.practiceName}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {doctorPracticeData?.practiceAddress}
                </p>
                <p>
                  <strong>Current Hospital:</strong>{" "}
                  {doctorProfessionalData?.currentHospital}
                </p>
                <p>
                  <strong>Office Hours:</strong>
                </p>
                <ul>
                  {doctorPracticeData?.officeHours?.map((hour, index) => (
                    <li key={index}>{hour}</li>
                  ))}
                </ul>
              </Card>
            </Col>

            {/* Contact & Services */}
            <Col span={12}>
              <Card title="Contact & Services">
                <p>
                  <strong>Services Offered:</strong>
                </p>
                <ul>
                  {doctorPracticeData?.servicesOffered?.map(
                    (service, index) => (
                      <li key={index}>{service}</li>
                    )
                  )}
                </ul>
                <p>
                  <strong>Accepted Insurance Plans:</strong>
                </p>
                <ul>
                  {doctorPracticeData?.acceptedInsurancePlans?.map(
                    (plan, index) => (
                      <li key={index}>{plan}</li>
                    )
                  )}
                </ul>
                <p>
                  <strong>Contact Info:</strong>
                </p>
                {doctorPracticeData?.contactInformation?.map(
                  (contact, index) => (
                    <div key={index}>
                      <p>Email: {contact.officeEmail}</p>
                      <p>Phone: {contact.officePhone}</p>
                      <p>
                        Website:{" "}
                        <a
                          href={contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contact.website}
                        </a>
                      </p>
                    </div>
                  )
                )}
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Modal>
  );
}

export default DoctorDetailsModal;
