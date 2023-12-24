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

// groupname: "",
//         month: "",
//         member: "",
//         phone: "",
//         email: "",
//         paidon: "",
//         actamount: "",
//         paidamount: "",
//         balance: "",
//         otherdetails: "",

const Paymentform = ({
    data,
    setData,
    member,
    status,
    group,
    month,
    amount,
}) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={8}>
                    <Form.Item label="Select Group" name={"groupname"}>
                        {" "}
                        <Select
                            placeholder="Select Group"
                            style={{ width: "100%" }}
                            value={data.gname}
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
                        {" "}
                        <Select
                            placeholder="Select Member"
                            style={{ width: "100%" }}
                            value={data.gname}
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
                            style={{ width: "100%" }}
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
                            value={data.gname}
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
                        <Input placeholder="Paid Amount" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Remaining Amount" name={"remainamount"}>
                        <Input placeholder="Pending Amount" type="number" />
                    </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                    <Form.Item label="Received On" name={"receivedon"}>
                        <input
                            type="date"
                            style={{ width: "100%" }}
                            placeholder="receivedon"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Received By" name={"receivedby"}>
                        <Input placeholder="Received By" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Payment Status" name={"status"}>
                        {" "}
                        <Select
                            placeholder="Select Status"
                            style={{ width: "100%" }}
                            value={data.gname}
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
                        <TextArea rows={4} placeholder="Remarks" />
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
                    Submit
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
