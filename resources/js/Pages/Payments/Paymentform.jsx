import React from "react";
import {
    Card,
    Typography,
    Col,
    Row,
    Form,
    Input,
    Select,
    Button,
    DatePicker,
} from "antd";
const { TextArea } = Input;
import { Link, Head } from "@inertiajs/react";

const Paymentform = ({
    data,
    setData,
    member,
    status,
    group,
    month,
    amount,
    saveBtn,
    submitHandler,
}) => {
    const [form] = Form.useForm();
    const groupSelectHandler = (value) => {
        setData("groupname", value);
    };
    const memberSelectHandler = (value) => {
        setData("membername", value);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={submitHandler}
            initialValues={{
                groupname: data.groupname,
                monthname: data.monthname,
                membername: data.membername,
                receivedon: data.receivedon,
                actamount: data.actamount,
                paidamount: data.paidamount,
                remainamount: data.remainamount,
                receivedby: data.receivedby,
                pstatus: data.pstatus,
                remarks: data.remarks,
            }}
        >
            <Row gutter={[8, 4]}>
                <Col xs={24} md={8}>
                    <Form.Item label="Select Group" name={"groupname"}>
                        <Select
                            placeholder="Select Group"
                            style={{ width: "100%" }}
                            value={data.groupname}
                            onChange={groupSelectHandler}
                        >
                            {group.map((option, index) => (
                                <Option key={index} value={option.label}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Select Member" name={"membername"}>
                        <Select
                            placeholder="Select Member"
                            style={{ width: "100%" }}
                            value={data.membername}
                            onChange={memberSelectHandler}
                        >
                            {member.map((option, index) => (
                                <Option key={index} value={option.label}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Select Month" name={"monthname"}>
                        <Select
                            placeholder="Please Select Month"
                            value={data.monthname}
                            style={{ width: "100%" }}
                            onChange={(value) => setData("monthname", value)}
                        >
                            {month.map((option, index) => (
                                <Option key={index} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Actual Amount" name={"actamount"}>
                        {" "}
                        <Select
                            placeholder="Select Actual Amount"
                            style={{ width: "100%" }}
                            value={data.actamount}
                            onChange={(value) => setData("actamount", value)}
                        >
                            {amount.map((option, index) => (
                                <Option key={index} value={option.label}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Paid Amount" name={"paidamount"}>
                        <Input
                            placeholder="Paid Amount"
                            value={data.paidamount}
                            type="number"
                            onChange={(e) =>
                                setData("paidamount", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Remaining Amount" name={"remainamount"}>
                        <Input
                            placeholder="Pending Amount"
                            value={data.remainamount}
                            type="number"
                            onChange={(e) =>
                                setData("remainamount", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                    <Form.Item label="Received On" name={"receivedon"}>
                        <input
                            type="date"
                            value={data.receivedon}
                            style={{ width: "100%" }}
                            placeholder="receivedon"
                            onChange={(e) =>
                                setData("receivedon", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Received By" name={"receivedby"}>
                        <Input
                            value={data.receivedby}
                            placeholder="Received By"
                            onChange={(e) =>
                                setData("receivedby", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Payment Status" name={"status"}>
                        {" "}
                        <Select
                            placeholder="Select Status"
                            style={{ width: "100%" }}
                            value={data.pstatus}
                            onChange={(value) => setData("pstatus", value)}
                        >
                            {status.map((option, index) => (
                                <Option key={index} value={option.label}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Remarks" name={"remarks"}>
                        <TextArea
                            value={data.remarks}
                            rows={4}
                            placeholder="Remarks"
                            onChange={(e) => setData("remarks", e.target.value)}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Button
                    htmlType="submit"
                    type="primary"
                    style={{ margin: "6px" }}
                >
                    {saveBtn}
                </Button>
                <Link href={window.route("payment.index")} type="button">
                    <Button type="primary" danger style={{ margin: "6px" }}>
                        Cancel
                    </Button>
                </Link>
            </div>
        </Form>
    );
};

export default Paymentform;
