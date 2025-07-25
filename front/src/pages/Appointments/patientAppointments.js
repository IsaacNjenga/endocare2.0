import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Typography,
  List,
  Empty,
  Space,
  Divider,
  Spin,
  Tag,
  Tooltip,
} from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  QuestionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DoctorDetailsModal from "../../components/doctorDetailsModal";
import useFetchDoctorById from "../../hooks/fetchDoctorById";
import Swal from "sweetalert2";
import UpdateAppointmentModal from "./updateAppointmentModal";
import axios from "axios";
import { isAfter, isBefore, isEqual, parse } from "date-fns";

const { Title, Text } = Typography;

const iconStyle = {
  fontSize: "1.4rem",
  color: "#00152a",
  padding: "6px",
  borderRadius: "50%",
  border: "1px solid #00152a",
};

function PatientAppointments({
  navigate,
  patientAppointments,
  appointmentsLoading,
  appointmentRefresh,
}) {
  const [openDoctorModal, setOpenDoctorModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [oldAppointments, setOldAppointments] = useState(null);
  const [newAppointments, setNewAppointments] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    doctorProfessionalData,
    doctorPracticeData,
    doctorLoading,
    fetchDoctorById,
    doctorUserData,
  } = useFetchDoctorById();

  useEffect(() => {
    const current = new Date();
    const olderAppointments = patientAppointments.filter((appt) => {
      const apptDateTime = parse(
        `${appt.appointmentDate} ${appt.appointmentTime}`,
        "yyyy-MM-dd p",
        new Date()
      );
      return isBefore(apptDateTime, current);
    });

    const newerAppointments = patientAppointments.filter((appt) => {
      const apptDateTime = parse(
        `${appt.appointmentDate} ${appt.appointmentTime}`,
        "yyyy-MM-dd p",
        new Date()
      );
      return isAfter(apptDateTime, current) || isEqual(apptDateTime, current);
    });

    setNewAppointments(newerAppointments);
    setOldAppointments(olderAppointments);
  }, [patientAppointments]);

  const viewDoctor = async (id) => {
    setLoading(true);
    await fetchDoctorById(id);
    setOpenDoctorModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const handleReschedule = (item) => {
    setLoading(true);
    setModalContent(item);
    setOpenUpdateModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "This action is irreversible!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          console.log("Delete", id);
          const res = await axios.delete(`delete-appointment?id=${id}`);
          if (res.data.success) {
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "Appointment deleted",
            });
            appointmentRefresh();
          }
        }
      })
      .catch((err) => {
        console.log(err);
        const errorMessage =
          err.response?.data?.error ??
          "An unexpected error occurred. Please try again later.";
        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorMessage,
        });
      });
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        marginTop: 40,
        padding: "0 16px",
      }}
    >
      <Card
        style={{
          padding: 24,
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Space
          style={{
            width: "100%",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Title level={4}>Upcoming Appointments</Title>
          <Button
            type="primary"
            onClick={() => navigate("/appointments/create-appointment")}
          >
            Book an Appointment
          </Button>
        </Space>

        <Divider />

        {appointmentsLoading ? (
          <Spin tip="Loading. Please wait..." fullscreen size="large" />
        ) : patientAppointments?.length === 0 ? (
          <Empty description="No upcoming appointments." />
        ) : (
          <>
            <List
              itemLayout="vertical"
              dataSource={newAppointments}
              renderItem={(item) => (
                <Card
                  key={item._id}
                  style={{ marginBottom: 12, borderRadius: 8 }}
                  type="inner"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <Space direction="vertical" size="small">
                        <Text>
                          <CalendarOutlined style={iconStyle} /> Date:{" "}
                          <strong>
                            {new Date(item.appointmentDate).toDateString()}
                          </strong>
                        </Text>{" "}
                        <Text>
                          <QuestionOutlined style={iconStyle} /> Reason:{" "}
                          <strong>
                            {item.appointmentReason
                              ? item.appointmentReason
                              : "N/A"}
                          </strong>
                        </Text>
                        <Text>
                          <ClockCircleOutlined style={iconStyle} /> Time:{" "}
                          <strong>{item.appointmentTime}</strong>
                        </Text>
                        <Text>
                          <UserOutlined style={iconStyle} /> Physician:{" "}
                          <Tag
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={() => viewDoctor(item.physician?._id)}
                            color="blue"
                          >
                            <Tooltip
                              title={`Click to view Dr. ${item.physician?.firstName} ${item.physician?.lastName}`}
                            >
                              <strong>
                                Dr. {item.physician?.firstName}{" "}
                                {item.physician?.lastName}
                              </strong>
                            </Tooltip>
                          </Tag>
                        </Text>
                      </Space>
                    </div>
                    <div>
                      <Space direction="vertical" size="small">
                        <Tooltip title="Reschedule this appointment">
                          <Button
                            type="primary"
                            icon={<EditOutlined />}
                            onClick={() => handleReschedule(item)}
                          />
                        </Tooltip>
                        <Tooltip title="Delete this appointment">
                          <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => handleDelete(item._id)}
                          />
                        </Tooltip>
                      </Space>
                    </div>
                  </div>
                </Card>
              )}
            />
          </>
        )}
      </Card>
      <Divider />
      <Card
        style={{
          padding: 24,
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Space
          style={{
            width: "100%",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Title level={4}>History</Title>
        </Space>

        <Divider />

        {appointmentsLoading ? (
          <div>Loading</div>
        ) : patientAppointments?.length === 0 ? (
          <Empty description="No previous appointments." />
        ) : (
          <>
            <List
              itemLayout="vertical"
              dataSource={oldAppointments}
              renderItem={(item) => (
                <Card
                  key={item._id}
                  style={{ marginBottom: 12, borderRadius: 8 }}
                  type="inner"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <Space direction="vertical" size="small">
                        <Text>
                          <CalendarOutlined style={iconStyle} /> Date:{" "}
                          <strong>
                            {new Date(item.appointmentDate).toDateString()}
                          </strong>
                        </Text>{" "}
                        <Text>
                          <QuestionOutlined style={iconStyle} /> Reason:{" "}
                          <strong>
                            {item.appointmentReason
                              ? item.appointmentReason
                              : "N/A"}
                          </strong>
                        </Text>
                        <Text>
                          <ClockCircleOutlined style={iconStyle} /> Time:{" "}
                          <strong>{item.appointmentTime}</strong>
                        </Text>
                        <Text>
                          <UserOutlined style={iconStyle} /> Physician:{" "}
                          <Tag
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={() => viewDoctor(item.physician?._id)}
                            color="blue"
                          >
                            <Tooltip
                              title={`Click to view Dr. ${item.physician?.firstName} ${item.physician?.lastName}`}
                            >
                              <strong>
                                Dr. {item.physician?.firstName}{" "}
                                {item.physician?.lastName}
                              </strong>
                            </Tooltip>
                          </Tag>
                        </Text>
                      </Space>
                    </div>
                  </div>
                </Card>
              )}
            />
          </>
        )}
      </Card>
      <DoctorDetailsModal
        openDoctorModal={openDoctorModal}
        setOpenDoctorModal={setOpenDoctorModal}
        loading={loading}
        doctorPracticeData={doctorPracticeData}
        doctorLoading={doctorLoading}
        doctorProfessionalData={doctorProfessionalData}
        doctorUserData={doctorUserData}
      />
      <UpdateAppointmentModal
        openUpdateModal={openUpdateModal}
        setOpenUpdateModal={setOpenUpdateModal}
        loading={loading}
        modalContent={modalContent}
        appointmentRefresh={appointmentRefresh}
      />
    </div>
  );
}

export default PatientAppointments;
