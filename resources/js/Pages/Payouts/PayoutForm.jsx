import React from "react";
import { Head, Link } from "@inertiajs/react";
import { Form, Input, DatePicker, Select, Row, Col, Button } from "antd";
const { TextArea } = Input;

const PayoutForm = ({
    props,
    month,
    status,
    group,
    member,
    amount,
    submitHandler,
    saveBtn,
    data,
    setData,
}) => {
    return (
        <Form layout="vertical" onFinish={submitHandler}>
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Group" name={"group"}>
                        <Select
                            placeholder="Select Group"
                            style={{ width: "100%" }}
                            onChange={(value) => setData("group", value)}
                        >
                            {group.map((option, index) => (
                                <Option key={index} value={option.label}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Month" name={"month"}>
                        <Select
                            placeholder="Please Select Month"
                            style={{ width: "100%" }}
                            onChange={(value) => setData("month", value)}
                        >
                            {month.map((option, index) => (
                                <Option key={index} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Member" name={"member"}>
                        <Select
                            placeholder="Select Member"
                            style={{ width: "100%" }}
                            onChange={(value) => setData("member", value)}
                        >
                            {member.map((option, index) => (
                                <Option key={index} value={option.label}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Phone Number" name={"phone"}>
                        <Input
                            placeholder="Payee Phone Number"
                            type="number"
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Email ID" name={"email"}>
                        <Input
                            placeholder="Payee Email ID"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Paid On" name={"paidon"}>
                        <input
                            type="date"
                            style={{ width: "100%" }}
                            onChange={(e) => setData("paidon", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Amount to Pay" name={"amtopay"}>
                        <Input
                            placeholder="Amount to Pay"
                            type="number"
                            onChange={(e) => setData("amtopay", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Paid Amount" name={"paidamount"}>
                        <Input
                            placeholder="Paid Amount"
                            type="number"
                            onChange={(e) =>
                                setData("paidamount", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Remaining Amount" name={"remaining"}>
                        <Input
                            placeholder="Remaining Amount"
                            type="number"
                            onChange={(e) =>
                                setData("remaining", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Payment Status" name={"status"}>
                        <Select
                            placeholder="Select Member"
                            style={{ width: "100%" }}
                            onChange={(value) => setData("status", value)}
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
                    <Form.Item label="Other Detaiils" name={"otherdetails"}>
                        <TextArea
                            rows={4}
                            placeholder="Other Details"
                            onChange={(e) =>
                                setData("otherdetails", e.target.value)
                            }
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
                <Link href={window.route("payout.index")} type="button">
                    <Button type="primary" danger style={{ margin: "6px" }}>
                        Cancel
                    </Button>
                </Link>
            </div>
        </Form>
    );
};

export default PayoutForm;
