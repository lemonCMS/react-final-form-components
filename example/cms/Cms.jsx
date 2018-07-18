import React, {Component} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import uniqid from 'uniqid';
import Render from './Render';
import Form from '../../src/Form';

class Cms extends Component {

  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.state = {
      page: []
    };
  }

  addItem(type, conf) {
    const page = Object.assign([], this.state.page);
    page.push({
      type,
      ...conf,
      id: uniqid('n')
    });
    this.setState({page: page});
  }

  render() {
    return (
      <div id={'main'}>
        <div id={'ribbon'}>
          <ol className={'breadcrumb'}>
            <li>Dashboard</li>
            <li>Cms</li>
          </ol>
        </div>
        <div id="content">
          CMS
          <Row>
            <Col md={2}>
              <ul>
                <li><button className="btn btn-block" type="button" onClick={() => (this.addItem('line', {name: 'h1', render: 'h1'}))}>H1</button></li>
                <li><button className="btn btn-block" type="button" onClick={() => (this.addItem('line', {name: 'h2', render: 'h2'}))}>H2</button></li>
                <li><button className="btn btn-block" type="button" onClick={() => (this.addItem('line', {name: 'h3', render: 'h3'}))}>H3</button></li>
                <li><button className="btn btn-block" type="button" onClick={() => (this.addItem('line', {name: 'h4', render: 'h4'}))}>H4</button></li>
                <li><button className="btn btn-block" type="button" onClick={() => (this.addItem('line', {name: 'h5', render: 'h5'}))}>H5</button></li>
                <li><button className="btn btn-block" type="button" onClick={() => (this.addItem('rte', {render: 'div'}))}>Text</button></li>
                <li><button className="btn btn-block" type="button" onClick={() => (this.addItem('link', {render: 'a'}))}>Link</button></li>
              </ul>
            </Col>
            <Col md={10}>
              page
              <Form debug shouldComponentUpdate={() => true}>
                <Render types={this.state.page} />
              </Form>
              <Well>
                <pre>
                  {JSON.stringify(this.state.page)}
                </pre>
              </Well>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Cms.propTypes = {};
Cms.defaultProps = {};

export default Cms;
