import Card from 'react-bootstrap/Card';
import parse, { domToReact } from 'html-react-parser';
import Button from 'react-bootstrap/Button';

const ListingCard = ({
  title = '',
  description = '',
  url = '',
}) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        {parse(description, {
          replace: (node) => {
            if (node?.name === 'p') {
              return <Card.Text>{domToReact(node?.children)}</Card.Text>;
            }
          },
        })}
      </Card.Body>
      <Card.Footer>
        <Button variant='primary' href={url}>
          More Info
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ListingCard;
