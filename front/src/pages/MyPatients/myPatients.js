import React, { useState, useContext } from "react";
import {
  Card,
  List,
  Spin,
  Typography,
  Row,
  Col,
  Avatar,
  Button,
  Divider,
  Space,
} from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import useFetchMyPatients from "../../hooks/fetchMyPatients";
import { UserContext } from "../../App";
import {
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { formatDistanceToNowStrict } from "date-fns";
import PatientModal from "./patientModal";
import useFetchPatientById from "../../hooks/fetchPatientById";
// import { myPatients } from "../../assets/data/data";

const { Title, Text } = Typography;

const avatarStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: 0,
  fontFamily: "Raleway",
};

const titleStyle = {
  marginBottom: 0,
  fontWeight: 600,
  fontSize: 14,
};

const cardStyle = {
  borderRadius: 12,
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  border: "1px solid #00152a",
  margin: "8px 3px",
};

const iconStyle = {
  fontSize: "1.2rem",
  color: "#00152a",
  padding: "5px",
  borderRadius: "50%",
  backgroundColor: "whitesmoke",
};

const labelStyle = { fontFamily: "Raleway", fontSize: "1rem" };

function MyPatients() {
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { myPatients, myPatientsLoading } = useFetchMyPatients(userId);
  const { patientData, patientLoading, fetchPatientById } =
    useFetchPatientById();
  const [listView, setListView] = useState(false);
  const [openPatientModal, setOpenPatientModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleView = async (id) => {
    setLoading(true);
    await fetchPatientById(id);
    setOpenPatientModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const renderPatientCard = (patient) => {
    const info = patient.patientInformation?.[0];
    const user = patient?.createdBy;

    return (
      <>
        <Card key={patient._id} style={cardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={avatarStyle}>
              <Avatar
                size={54}
                src={user.avatar}
                icon={!user.avatar && <UserOutlined />}
                style={{
                  backgroundColor: !user.avatar && "#f56a00",
                  fontWeight: "bold",
                }}
              >
                {!user.avatar &&
                  `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`}
              </Avatar>
              <div>
                <div style={titleStyle}>
                  {user.firstName} {user.lastName}
                </div>
                <div style={{ color: "#666" }}>{info.diagnosis}</div>
              </div>
            </div>
            <div
              style={{
                margin: "0px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Button
                type="primary"
                style={{ fontFamily: "Roboto" }}
                onClick={() => handleView(user?._id)}
              >
                View More
              </Button>
            </div>
          </div>
          <Divider style={{ borderColor: "#00152a" }} />
          <Space
            direction="vertical"
            size="small"
            style={{ padding: "0px 10px" }}
          >
            <div>
              <Text style={labelStyle}>
                <PhoneOutlined style={iconStyle} /> {user.phoneNumber}
              </Text>
            </div>
            <div>
              <Text style={labelStyle}>
                <MailOutlined style={iconStyle} /> {user.email}
              </Text>
            </div>
            <div>
              <Text style={labelStyle}>
                <ClockCircleOutlined style={iconStyle} />{" "}
                {formatDistanceToNowStrict(new Date(user.dob))} old
              </Text>
            </div>
          </Space>
        </Card>
      </>
    );
  };

  const renderPatientListItem = (patient) => {
    const user = patient?.createdBy;
    const info = patient.patientInformation?.[0];
    console.log(patient);
    return (
      <List.Item key={patient._id}>
        <List.Item.Meta
          avatar={
            <Avatar
              size={42}
              src={user.avatar}
              icon={!user.avatar && <UserOutlined />}
              style={{
                backgroundColor: !user.avatar && "#f56a00",
                fontWeight: "bold",
              }}
            >
              {!user.avatar &&
                `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`}
            </Avatar>
          }
          title={
            <>
              {user?.firstName} {user?.lastName}
            </>
          }
          description={`${info.diagnosis} | ${user.email} | ${user.phoneNumber}`}
        />
        <div>
          <Button type="primary" onClick={() => handleView(user._id)}>
            View More
          </Button>
        </div>
      </List.Item>
    );
  };

  if (myPatientsLoading || patientLoading) {
    return <Spin tip="Loading..." size="large" fullscreen />;
  }

  const gridIconStyle = {
    background: !listView ? "#1377fd" : "#fff0f0",
    color: !listView ? "white" : "black",
    fontSize: "1.4rem",
    padding: 8,
    borderRadius: "20%",
    border: listView ? "1px solid grey" : "1px solid rgba(0,0,0,0)",
  };

  const listIconStyle = {
    background: listView ? "#1377fd" : "#fff0f0",
    color: listView ? "white" : "black",
    fontSize: "1.4rem",
    padding: 8,
    borderRadius: "20%",
    border: !listView ? "1px solid grey" : "1px solid rgba(0,0,0,0)",
  };

  return (
    <div style={{ padding: 18 }}>
      <Title level={2} style={{ fontFamily: "Raleway" }}>
        My Patients
      </Title>
      <Divider style={{ borderColor: "#00152a" }} />
      <div
        style={{
          display: "flex",
          gap: 5,
          padding: 10,
          margin: "10px auto",
        }}
      >
        <div onClick={() => setListView((prev) => !prev)}>
          <AppstoreOutlined style={gridIconStyle} />
        </div>

        <div onClick={() => setListView((prev) => !prev)}>
          <UnorderedListOutlined style={listIconStyle} />
        </div>
      </div>

      {myPatients ? (
        listView ? (
          <List
            size="large"
            bordered
            pagination={["bottom", "center"]}
            itemLayout="horizontal"
            dataSource={myPatients}
            renderItem={renderPatientListItem}
            loading={myPatientsLoading}
          />
        ) : (
          <Row gutter={[16, 16]}>
            {myPatients.map((patient) => (
              <Col key={patient._id} span={8}>
                {renderPatientCard(patient)}
              </Col>
            ))}
          </Row>
        )
      ) : null}
      <PatientModal
        openPatientModal={openPatientModal}
        loading={loading}
        setOpenPatientModal={setOpenPatientModal}
        patientData={patientData}
      />
    </div>
  );
}

export default MyPatients;
