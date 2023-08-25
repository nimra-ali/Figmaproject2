import React from 'react';
import { Button, Layout, Row, Col } from 'antd';
import './Container.css';
import { EditOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import {RightOutlined} from '@ant-design/icons'
const { Content } = Layout;

const Containers = () => {
  return (
    <div className='main-flexx'>
    <Layout>
      <Content >
        <Row gutter={[16, 16]}>
          {/* <div className='card-3'> */}
          <Col span={5} className='container1'>
            <div className='width'>
              <div className='pen-div'>
            <EditOutlined className='pen' />
            </div>
            <img className='men' src={require('../Images/man.png')} />
            <h2 className='h2'>Jonathan Snow</h2>
            <p className='PARA'>jonathan.s45@gmail.com</p>
            <p className='parA2'>(319) 555-0115</p>
            <Button className='buTTon' type='text'>
              CHANGE PASSWORD
            </Button>
            </div>
          </Col>
         
         
          <p className='PRA2'>You have <span>2</span> active businesses</p>
          <Button className='buTton' type='text'>
            + Add business
          </Button>
         
          <div className='main-card'>
            <Col span={8}>
              <div className="container-box">
                <div className='for-flex'>
                  <h2 className='crust-pizza'>Upper Crust Pizza</h2>
                  <Button className='bTn'>
                    <PlusOutlined className='plus-icon' />
                  </Button>
                  {/* <div className='box-line'></div> */}
                </div>
                <hr className='box-hr' />
                <div className='for-flex2'>
                  <p className='namedom'>NAME</p>
                  <div className='DDD'>
                  <p className='domain'>DOMAIN</p>
                  </div>
                </div>
                <div className='for-flex3'>
                  <p className='namedom1'>Miami</p>
                  <p className='domain2'>../uppercrust/miami</p>
                <Button className='bttn'>
                Dashboard <RightOutlined className =''/>
                  </Button>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="container-box2">
              <div className='for-flex'>
                  <h2 className='crust-pizza'>Ideal Nutrition</h2>
                  <Button className='bTn'>
                    <PlusOutlined className='plus-icon' />
                  </Button>
                
                </div>
                <hr className='box-hr' />
                <div className='for-flex2'>
                  <p className='namedomm'>NAME</p>
                  <p className='domainn'>DOMAIN</p>
                </div>
                <div className='for-flex3'>
                  <div className='p-div'>
                  <p className='namedom2'>LosAngeles</p>
                  </div>
                  <p className='domain3'>../idealnutrition/losangeles</p>
                <Button className='bttn2'>
                Dashboard <RightOutlined className =''/>
                  </Button>

                </div>
                <hr className='box-hr' />
                <div className='for-flex2'>
                  <p className='namedomm'>NAME</p>
                  <p className='domainn22'>DOMAIN</p>
                </div>
                <div className='for-flex4'>
                  <p className='namedom4'>SanDiego</p>
                  <p className='domain5'>../idealnutrition/sandiego</p>
                <Button className='bttn3'>
                Dashboard <RightOutlined className =''/>
                  </Button>

                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Content>
    </Layout>
    </div>
  );
};

export default Containers;