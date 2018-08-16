import React, { Component } from 'react';
import {
  Button,
  Row,
  Col,
  // Card,
  // CardImg,
  CardText,
  CardBody,
  CardTitle
  // CardSubtitle,
  // CardLink
} from 'reactstrap';

class SiteFooter extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Row>
          {/*<Col sm="1" />*/}
          <Col
            sm="4"
            className="d-flex flex-column justify-content-between card"
          >
            {/*<Card>*/}
            <CardBody>
              <CardTitle>Время работы:</CardTitle>
              <CardText>Пн-Пт с 9-00 до 18-00ч.</CardText>
              <CardTitle>Телефоны:</CardTitle>
              <p>/0462/ 605-525</p>

              <p>/063/ 595-1913 </p>
              <p>отдел стартеров и генераторов</p>

              <p>/095/ 895-4332 </p>
              <p>отдел подшипников и автозапчастей</p>
              <CardTitle>Email:</CardTitle>
              <CardText>
                <a href="mailto:info@starterplus.net">info@starterplus.net</a>
              </CardText>
              <CardTitle>Адрес:</CardTitle>
              <p> г.Чернигов</p>
              <p> ул. Инструментальная 34</p>
            </CardBody>

            {/*</Card>*/}
            <Button
              className=""
              color="primary"
              onClick={() => {
                this.props.handleClick('contacts');
              }}
            >
              контакты...
            </Button>
            <p />
          </Col>
          <Col
            sm="4"
            className="d-flex flex-column justify-content-between card"
          >
            <CardBody>
              <h3>Наши Услуги</h3>
              <CardTitle>Мы занимаемся:</CardTitle>
              <p>
                <i className="icon-wrench icon-white" />
                ремонтом стартеров
              </p>
              <p>
                <i className="icon-wrench icon-white" />
                ремонтом генераторов
              </p>
              <p>
                <i className="icon-wrench icon-white" />
                производством тормозных трубок
              </p>
              <CardTitle>Мы реализуем</CardTitle>
              <p>
                <i className="icon-wrench icon-white" />
                Стартеры и генераторы
              </p>
              <p>
                <i className="icon-wrench icon-white" />
                автоэлектронику
              </p>
              <p>
                <i className="icon-wrench icon-white" />
                Запчасти к легковым и комерческим автомобилям
              </p>
              <p>
                <i className="icon-wrench icon-white" />
                Подшипники
              </p>
              <p>
                <i className="icon-wrench icon-white" />
                Масла Comma
              </p>
              <p>
                <i className="icon-wrench icon-white" />
                Фильтры оптом
              </p>
              <p>
                <i className="icon-wrench icon-white" />
                аккумуляторы Bosch,Varta,A-Мega,Rocket
              </p>

              <CardTitle>А также у нас доступно</CardTitle>
              <p>
                <i className="icon-wrench icon-white" />
                снятие и установка агрегатов
              </p>
              <p>
                <i className="icon-wrench icon-white" />
                Страхование автотранспорта
              </p>
            </CardBody>
            <p />
            <Button
              color="primary"
              onClick={() => {
                this.props.handleClick('services');
              }}
            >
              услуги...
            </Button>
            <p />
          </Col>
          <Col
            sm="4"
            className="d-flex flex-column justify-content-between card"
          >
            <CardBody>
              <CardTitle>Коротко о Нас</CardTitle>

              <CardText>
                ССЦ СТАРТЕР+ - это предприятие создано для ремонта и продажи
                стартеров и генераторов, комплектующих к ним, реализации
                автозапчастей и подшипников для легковых и грузовых
                автомобилей,спецтехники иностранного и отечественного
                производства.{' '}
              </CardText>

              <CardText>
                CCЦ Стартер+ обладает квалифицированными кадрами и всем
                необходимым технологическим оборудованием для качественного
                выполнения ремонта в сжатые сроки. 90% комплектующих находится
                на собственном складе сервисного центра,что позволяет
                производить ремонт в течении рабочего дня, а в особых случаях в
                течении суток.
              </CardText>
            </CardBody>
            <Button
              color="primary"
              onClick={() => {
                this.props.handleClick('about');
              }}
            >
              о нас...
            </Button>
            <p />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SiteFooter;
