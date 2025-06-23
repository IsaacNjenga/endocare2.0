import React, { useEffect, useState } from "react";
import {
  //Button,
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
  QuestionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import PatientDetailsModal from "../../components/patientDetailsModal";
import useFetchPatientById from "../../hooks/fetchPatientById";
import { isAfter, isBefore, isEqual, parse } from "date-fns";

const { Title, Text } = Typography;

const iconStyle = {
  fontSize: "1.4rem",
  color: "#00152a",
  padding: "6px",
  borderRadius: "50%",
  border: "1px solid #00152a",
};

function DoctorAppointments({
  navigate,
  doctorAppointments,
  appointmentsLoading,
  appointmentRefresh,
  user,
}) {
  const [openPatientModal, setOpenPatientModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [oldAppointments, setOldAppointments] = useState(null);
  const [newAppointments, setNewAppointments] = useState(null);
  const { patientData, patientLoading, fetchPatientById } =
    useFetchPatientById();

  useEffect(() => {
    const current = new Date();
    const olderAppointments = doctorAppointments.filter((appt) => {
      const apptDateTime = parse(
        `${appt.appointmentDate} ${appt.appointmentTime}`,
        "yyyy-MM-dd p",
        new Date()
      );
      return isBefore(apptDateTime, current);
    });

    const newerAppointments = doctorAppointments.filter((appt) => {
      const apptDateTime = parse(
        `${appt.appointmentDate} ${appt.appointmentTime}`,
        "yyyy-MM-dd p",
        new Date()
      );
      return isAfter(apptDateTime, current) || isEqual(apptDateTime, current);
    });

    setNewAppointments(newerAppointments);
    setOldAppointments(olderAppointments);
  }, [doctorAppointments]);

  const viewPatient = async (id) => {
    setLoading(true);
    fetchPatientById(id);
    setOpenPatientModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
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
          {/* <Button
            type="primary"
            onClick={() => navigate("/appointments/create-appointment")}
          >
            Schedule an Appointment
          </Button> */}
        </Space>

        <Divider />

        {appointmentsLoading ? (
          <Spin tip="Loading. Please wait..." fullscreen size="large" />
        ) : doctorAppointments?.length === 0 ? (
          <Empty description="No upcoming appointments." />
        ) : (
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
                        <UserOutlined style={iconStyle} /> Patient:{" "}
                        <Tag
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => viewPatient(item.createdBy?._id)}
                          color="green"
                        >
                          <Tooltip
                            title={`Click to view ${item.createdBy?.firstName} ${item.createdBy?.lastName}`}
                          >
                            <strong>
                              {item.createdBy?.firstName}{" "}
                              {item.createdBy?.lastName}
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
          <Spin tip="Loading. Please wait..." fullscreen />
        ) : doctorAppointments?.length === 0 ? (
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
                          <UserOutlined style={iconStyle} /> Patient:{" "}
                          <Tag
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={() => viewPatient(item.createdBy?._id)}
                            color="green"
                          >
                            <Tooltip
                              title={`Click to view ${item.createdBy?.firstName} ${item.createdBy?.lastName}`}
                            >
                              <strong>
                                {item.createdBy?.firstName}{" "}
                                {item.createdBy?.lastName}
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
      <PatientDetailsModal
        patientData={patientData}
        patientLoading={patientLoading}
        openPatientModal={openPatientModal}
        setOpenPatientModal={setOpenPatientModal}
        loading={loading}
      />
    </div>
  );
}

export default DoctorAppointments;
