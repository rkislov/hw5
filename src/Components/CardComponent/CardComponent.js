import { Card, Button } from "react-bootstrap";
import  PropTypes  from "prop-types";

const CardComponent = ({ children, title, text, link }) => {
    return (
        <Card style={{ width: '18rem' }}>
            {children}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {text}
                </Card.Text>
                <a href={link}>Go somewhere</a>
            </Card.Body>
        </Card>
    )
}

CardComponent.defaultProps = {
    children: null,
    title: 'default title',
    text: 'default text',
    link: ''
}



export default CardComponent;
