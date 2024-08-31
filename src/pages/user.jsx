import { notification, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getUserAPI } from "../util/api";

const UserPage = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fecthUser = async () => {
      const res = await getUserAPI();
      if (!res.message) {
        setDataSource(res);
      } else {
        notification.error({
          message: "Unauthorized",
          description: res.message,
        });
      }
    };
    fecthUser();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        rowKey={"_id"}
      />
      ;
    </div>
  );
};

export default UserPage;
