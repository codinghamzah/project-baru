import React from "react";
import {
  Button,
  CardImg,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.users.title
  };
};
const JumbotronComponent = (props) => {
  return (
    <Container>
      <div class="P-5 mb-4 bg-dark rounded-3 text-white">
        <div class="Container-fluid py-5">
          <h1 class="display-5 fw-bold">{props.title}</h1>
          <p class="col-md-8 fs-4">Selamat Datang di website</p>
          <div>
            <Button color="danger" onClick={function noRefCheck() {}}>
              Click Me
            </Button>
            
          </div>
        </div>
      </div>
    </Container>
  );
};

export default connect(mapStateToProps,null) (JumbotronComponent);
