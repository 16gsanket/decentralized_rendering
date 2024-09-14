import { Handler } from 'netlify-lambda';
import { parse } from 'body-parser';

const render: Handler = async (event) => {
  const { body } = event;
  const parsedBody = parse(body, { useNewUrlParser: true });
  const data = parsedBody.data;

  // Render the decentralized renderer with the received data
  const renderer = await import('../src/templates/eBL/template');
  const renderedHtml = renderer.render(data);

  return {
    statusCode: 200,
    body: renderedHtml,
  };
};

export { render };