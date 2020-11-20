import Card from 'react-bootstrap/Card';
import parse, { domToReact } from 'html-react-parser';

const ListingCard = ({
  title = '',
  description = '',
  url = '',
  created = '',
}) => {
  const date = new Date(created)
  console.log("date", date)
  return (
    <Card style={{ width: '100%' }}>
      <Card.Header>
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className='mb-2 text-muted'>
          {/* {Date.parse(created)} */}
        </Card.Subtitle>
        {parse(description, {
          replace: (node) => {
            if (node?.name === 'p') {
              return <Card.Text>{domToReact(node?.children)}</Card.Text>;
            }
          },
        })}
      </Card.Body>
      <Card.Footer>
        <Card.Link href={url}>Go to Post</Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default ListingCard;
