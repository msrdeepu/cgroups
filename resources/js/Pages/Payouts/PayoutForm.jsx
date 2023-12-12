import React from "react";
import { Head, Link } from "@inertiajs/react";
import { Form, Input, DatePicker, Select, Row, Col, Button } from "antd";
const { TextArea } = Input;

const PayoutForm = ({ month }) => {
    return (
        <Form layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Group" name={"group"}>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: "100%",
                            }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                                {
                                    value: "Yiminghe",
                                    label: "yiminghe",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Month" name={"month"}>
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
                <Col xs={24} md={12}>
                    <Form.Item label="Select Member" name={"member"}>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: "100%",
                            }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                                {
                                    value: "Yiminghe",
                                    label: "yiminghe",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Phone Number" name={"phone"}>
                        <Input placeholder="Payee Phone Number" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Email ID" name={"email"}>
                        <Input placeholder="Payee Email ID" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Paid On" name={"paidon"}>
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Amount to Pay" name={"amtopay"}>
                        <Input placeholder="Amount to Pay" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Paid Amount" name={"paidamount"}>
                        <Input placeholder="Paid Amount" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Remaining Amount" name={"remaining"}>
                        <Input placeholder="Remaining Amount" type="number" />
                    </Form.Item>
                </Col>

                <Col xs={24}>
                    <Form.Item label="Other Detaiils" name={"otherdetails"}>
                        <TextArea rows={4} placeholder="Other Details" />
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
