import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import storeItems from '../data/data.json';

export default function Store() {
    return (
        <>
            <h1> Store</h1>
            <Row sx={1} md={2} lg={3} className="g-3">
                {
                    storeItems.map(item => {
                        return (
                            <Col key={item.id}>
                                <StoreItem {...item} />
                            </Col>
                        )
                    })
                }

            </Row>
        </>
    )

}