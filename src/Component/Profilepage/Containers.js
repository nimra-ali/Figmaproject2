import React , {useState} from 'react';
import { Button, Layout, Row, Col , Modal  ,Form,
  Input,
  Upload,
  message,} from 'antd';
import './Container.css';
import { EditOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import {RightOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const Containers = () => {
  const navigate = useNavigate("");
  const [visible, setVisible] = useState(false);
  const [editProfile, seteditProfile] = useState(false);
  const [form] = Form.useForm();
  const [instruction, setinstruction] = useState("");

  const send = (e) => {
    e.preventDefault();
    // setShow(true)
    setinstruction(
      "Lorem Ipsum is the standard filler text used in design throughout the world. It’s been the standards since the 1500’s and it’s time for an update."
    );
  };
  const handlecross = () => {
    setinstruction(false);
  };
  const showModal2 = () => {
    seteditProfile(true);
    console.log("set");
  };

  const hideModal = () => {
    seteditProfile(false);
    // console.log("close")
  };

  const hideModal2 = () => {
    seteditProfile(false);
    console.log("close")
  };


  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onFinish = (values) => {
    console.log("Received values:", values);
    hideModal();
  };
  // const [secondModalVisible, setSecondModalVisible] = useState(false);

  // const showSecondModal = () => {
  //   setSecondModalVisible(true);
  // };
  
  // const handleSecondOk = () => {
  //   // Add your logic for the second modal "OK" button here
  //   setSecondModalVisible(false);
  // };
  
  // const handleSecondCancel = () => {
  //   setSecondModalVisible(false);
  // };


  // const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };


  return (
    <div className='main-flexx'>
    <Layout>
      <Content >
        <Row gutter={[16, 16]}>
          {/* <div className='card-3'> */}
          <Col span={5} className='container1'>
            <div className='width'>
              <div className='pen-div'>
              {/* onClick={showSecondModal} */}
            <EditOutlined className='pen' onClick={showModal2} />
            </div>
            <Modal
              // title="Edit Profile"
              title={<div className="custom-modal-title">Edit Profile</div>}
              open={editProfile}
              onCancel={hideModal}
              footer={null}
              width={500}
              height={100}
              style={{
                // background:'purple',
                borderRadius: 4,
              }}
            >
              <Form form={form} onFinish={onFinish}>
                <Upload
                  name="profileImage"
                  showUploadList={false}
                  customRequest={handleUpload}
                >
                  <div style={{ marginBottom: 20 }}>
              
                    <div className="editprofiledp">
                      <EditOutlined
                        style={{
                          color: "white",
                          fontSize: "2rem",
                          textAlign: "center",
                          marginTop: "30px",
                        }}
                      />
                    </div>
                  </div>
                </Upload>
                <div>
                  <div className="editprofileinput1 place">
                    <div
                      className="editprofilenae"
                      style={{ textAlign: "start" }}
                    >
                      <label>FIRST NAME</label>
                      <input type="text" placeholder="Jonathan" />
                    </div>
                    <div
                      className="editprofilenae"
                      style={{ textAlign: "start" }}
                    >
                      <label>LAST NAME</label>
                      <input type="text " placeholder="Snow" />
                    </div>
                  </div>
                  <div className="editprofileinput1 place">
                    <div
                      className="editprofilenae"
                      style={{ textAlign: "start" }}
                    >
                      <label>PHONE NUMBER</label>
                      <input type="text" placeholder="(319) 555-0115" />
                    </div>
                    <div
                      className="editprofilenae"
                      style={{ textAlign: "start" }}
                    >
                      <label>EMAIL ADDRESS </label>
                      <input
                        type="text "
                        placeholder="jonathan.s45@gmail.com"
                      />
                    </div>
                  </div>

                  {/* <Button onClick={send} className='signbutton tel'>
Save changes
</Button>: */}
                  <Button className="signbutton tel"  onClick={hideModal2}>
                    <h4 className="changes">save changes</h4>
                  </Button>

                  {instruction ? (
                    <div className="instructionptag">
                      <p>{instruction}</p>
                      <Button onClick={handlecross}>Cancel</Button>
                    </div>
                  ) : (
                    <h3 className="wheel" onClick={send}>
                      <editProfile
                        style={{
                          fontSize: "24px",
                          marginRight: "8px",
                          color: "#192E46",
                        }}
                      />
                      Need help?
                    </h3>
                  )}
                </div>
              </Form>
            </Modal>


            {/* <Modal
  title= "Edit profile"
  visible={secondModalVisible}
  onOk={handleSecondOk}
 onCancel ={handleSecondCancel}
  okText="OK"
 cancelText="Cancel"
>
  <div className='icon-men'>
<img className='icon-two' src={require('../Images/Vector (4).png')} /> 
    
  </div>

<div className='input-parent'>

  <label className='grey'>FirstName</label>
  <input type='name' />

  <label className='grey'>LastName</label>
  <input type='name' />
</div>
</Modal> */}
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
          <Button className='buTton' type='text'  onClick={showModal}>
            + Add business
          </Button>
          <div className="Modal">
                        
                      <Modal
                      className="cus"
        title ="Get started by creating your first business"
        open={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="skip" onClick={handleCancel}style={{ background: "#FB775A",color:"white" }} className="btnpluss">
           + Add business
          </Button>,
          <div className='btun'>
          <Button key="add" type="primary" 
          onClick={handleCancel}className="skipbtn" style={{ background: "white",color:"#4C6889" }} >
Skip for Now          </Button>,
</div>
        ]}
      >
     
      </Modal>
                      </div>
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