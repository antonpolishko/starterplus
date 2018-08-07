import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Button,
  Row,
  Col
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';

import logo from './logo.svg';
import './App.css';

// Текст вебсайта
const siteLogoText = 'Стартер+';
const siteJumbotronHeader = 'Стартер+';
const siteJumbotronSubHeader =
  'Добро пожаловать в специализированный сервисный центр СТАРТЕР+. Мы продлим жизнь вашему автомобилю';
const siteJumbotronText = '';
const siteJumbotronMoreButton = 'Подробнее';
const siteMapIframe =
  '<iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?msa=0&amp;msid=202198080654084340327.0004d55a7810c2503279f&amp;ie=UTF8&amp;t=m&amp;ll=51.524686,31.261597&amp;spn=0.012816,0.027466&amp;z=15&amp;output=embed"></iframe>';
// const siteNavbar = {
//   '#': "Главная",
//   'services': "Услуги",
//   'contacts': "Контакты",
//   'map': "Как к нам проехать",
//   'about': "О Нас",
//   };

const SiteServices = () => {
  return (
    <div>
      <h1>Наши Услуги</h1>
      <ul>
        <h3>Снятие и установка агрегатов</h3>
        <h3>Мы изготавливаем</h3>
        <ul>
          <li>тормозные трубки</li>
        </ul>

        <h3>Мы занимаемся ремонтом</h3>
        <ul>
          <li>стартеров</li>
          <li>генераторов</li>
        </ul>
        <h3>Мы реализуем</h3>
        <ul>
          <li>Стартеры и генераторы </li>
          <li>Автоэлектронику</li>
          <li>Запчасти к легковым и коммерческим автомобилям</li>
          <li>Подшипники</li>
          <li>Масла Comma</li>
          <li>Фильтры оптом</li>
          <li>аккумуляторы Bosch,Varta,A-Мega,Rocket</li>
        </ul>
        <h3>А также</h3>
        <ul>
          <li>Страхование автотранспорта</li>
        </ul>

        <h3>ГАРАНТИЯ</h3>
        <p>
          ССЦ Стартер+ сервисно ориентированное предприятие,поэтому все товары
          приобретённые у нас подлежат гарантийному обслуживанию. Сроки гарантии
          составляют от 1 до 6 месяцев.
        </p>
        <p>
          Сроки рассмотрения рекламаций от 3 до 14 дней. Также товар можно
          вернуть на протяжении 14 дней с момента приобретения,при условии,что
          товар не был введён в эксплуатацию и сохранена целостность упаковки.
        </p>
      </ul>

      <h3>За подробностями звоните по телефонам</h3>
      <ul>
        <li>
          <strong> /0462/ 605-525</strong>{' '}
        </li>
        <li>
          <strong>/095/ 895-4332</strong> отдел подшипников и автозапчастей
        </li>
        <li>
          <strong>/063/ 595-1913</strong> отдел стартеров и генераторов
        </li>
      </ul>
    </div>
  );
};

const SiteAbout = () => {
  return (
    <div>
      <h2>Добро пожаловать в специализированный сервисный центр СТАРТЕР+.</h2>
      <p>
        ССЦ СТАРТЕР+ - это предприятие создано для ремонта и продажи стартеров и
        генераторов, комплектующих к ним, реализации автозапчастей и подшипников
        для легковых и грузовых автомобилей,спецтехники иностранного и
        отечественного производства. ССЦ Стартер+ обладает квалифицированными
        кадрами и всем необходимым технологическим оборудованием для
        качественного выполнения ремонта в сжатые сроки. 90% комплектующих
        находится на собственном складе сервисного центра,что позволяет
        производить ремонт в течении рабочего дня, а в особых случаях в течении
        суток. ССЦ Стартер+ обслуживая автолюбителей, СТО и АТП города и области
        зарекомендовал себя как добросовестный партнер и входит в тройку лучших
        сервисов города Чернигова. ЖЕЛАЕМ СЧАСТЛИВОЙ ДОРОГИ!
      </p>
    </div>
  );
};

const SiteContacts = () => {
  return (
    <div>
      <h1>Наши контакты</h1>
      <ul>
        <h3>Звоните по телефонам:</h3>
        <ul>
          <li>/0462/ 605-525 </li>
          <li>/095/ 895-4332 отдел подшипников и автозапчастей</li>
          <li>/063/ 595-1913 отдел стартеров и генераторов</li>
        </ul>
        <h3>Пишите на email:</h3>
        <ul>
          <li>
            <a href="mailto:info@starterplus.net">info@starterplus.net</a>
          </li>
        </ul>
        <h3>Заезжайте по адресу:</h3>
        <ul>
          <li>г.Чернигов, ул. Инструментальная 34</li>
          <a className="btn btn-primary btn" href="/location/">
            <span className="btn-label">
              <i className="icon-map-marker" /> Найти на карте
            </span>
          </a>
        </ul>
      </ul>
    </div>
  );
};

const SiteAnniversary = () => {
  return (
    <div>
      <h1>НАМ 10 ЛЕТ!</h1>
      <br />
      <p>
        Уважаемые клиенты, коллеги, друзья! Поздравляем всех нас с юбилеем.
        Огромное спасибо за то, что Вы были с нами на пути становления
        предприятия.
      </p>
      <p>
        Спасибо за терпение и понимание при возникающих рекламационных
        ситуациях, которые неизбежно возникают при ремонте любых технических
        устройств, особенно связанных с электричеством.
      </p>
      <p>
        Мы же будем стремиться к тому, чтобы быть полезными для Вас и ваших
        железных коней. Желаем счастливой дороги и пусть Ваш бизнес будет
        рентабельным. С уважением, команда СТАРТЕР+
      </p>
      <br />
      <Button href="/about/">
        Подробнее о нас <i className="icon-info-sign" />
      </Button>
      <Button href="/location/">
        Как к нам проехать <i className="icon-road" />{' '}
      </Button>
    </div>
  );
};

class SiteLocation extends Component {
  constructor(props) {
    super(props);
  }

  iframe = { __html: siteMapIframe };

  render() {
    return (
      <div>
        <h1>Как к нам проехать</h1>
        <br />
        <h2>г.Чернигов, Ул. Инструментальная,34</h2>
        <h2> GPS +51° 31' 27.96", +31° 15' 40.20" </h2>
        <br />

        <div dangerouslySetInnerHTML={this.iframe} />
        <br />
        <small>
          Посмотреть{' '}
          <a href="&quot;https://maps.google.com/maps/ms?msa=0&amp;msid=202198080654084340327.0004d55a7810c2503279f&amp;ie=UTF8&amp;t=m&amp;ll=51.524686,31.261597&amp;spn=0.012816,0.027466&amp;z=15&amp;source=embed&quot; style=&quot;color:#0000FF;text-align:left&quot;">
            Стартер+
          </a>{' '}
          на большой карте
        </small>
        <ul>
          <li>
            С пр.Мира на перекрестке в р-не обл. больницы повернуть на улицу
            Литовскую (бывшая Кирова), проехать 0.8км.
          </li>
          <li>
            С ул. Казацкой (бывшая 50 лет ВЛКСМ) на T-образном перекрестке в
            р-не АИС повернуть на Инструментальную, проехать 1.2км.
          </li>
          <li>
            С ул. Любечской на кольце в р-не мясокомбината перестроиться на ул.
            Казацкую (бывшая 50 лет ВЛКСМ), на T-образном перекрестке в р-не АИС
            повернуть на Инструментальную, проехать 1.2км.
          </li>
        </ul>
      </div>
    );
  }
}

class SiteNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { route: '/' };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">{siteLogoText}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Главная</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services/">Услуги</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacts/">Контакты</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/map/">Как к нам проехать</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">О Нас</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class SiteHero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">{siteJumbotronHeader}</h1>
        <p className="lead">{siteJumbotronSubHeader}</p>
        <hr className="my-2" />
        <p>{siteJumbotronText}</p>
        <p className="lead">
          <Button color="primary">{siteJumbotronMoreButton}</Button>
        </p>
      </Jumbotron>
    );
  }
}

class SiteBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Jumbotron>{this.props.children}</Jumbotron>;
  }
}

class SiteFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row className="align-items-start">
          <Col md="1" />
          <Col>
            <h3>Время работы:</h3>
            <h5> Пн-Пт с 9-00 до 18-00ч.</h5>
            <br />
            <h3>Телефоны: </h3>
            <h4>/0462/ 605-525</h4>

            <h4>/063/ 595-1913 </h4>
            <h5>отдел стартеров и генераторов</h5>

            <h4>/095/ 895-4332 </h4>
            <h5>отдел подшипников и автозапчастей</h5>

            <br />
            <h4>Email:</h4>
            <h4>
              <a href="mailto:info@starterplus.net">info@starterplus.net</a>
            </h4>
            <br />
            <h3> Адрес:</h3>
            <h4> г.Чернигов</h4>
            <h4> ул. Инструментальная 34</h4>
          </Col>
          <Col>
            <h3>Наши Услуги</h3>
            <h4>Мы занимаемся</h4>
            <i className="icon-wrench icon-white" />
            ремонтом стартеров
            <p />
            <i className="icon-wrench icon-white" />
            ремонтом генераторов
            <p />
            <i className="icon-wrench icon-white" />
            производством тормозных трубок
            <p />
            <h4>Мы реализуем</h4>
            <i className="icon-wrench icon-white" />
            Стартеры и генераторы
            <p />
            <i className="icon-wrench icon-white" />
            автоэлектронику
            <p />
            <i className="icon-wrench icon-white" />
            Запчасти к легковым и комерческим автомобилям
            <p />
            <i className="icon-wrench icon-white" />
            Подшипники
            <p />
            <i className="icon-wrench icon-white" />
            Масла Comma
            <p />
            <i className="icon-wrench icon-white" />
            Фильтры оптом
            <p />
            <i className="icon-wrench icon-white" />
            аккумуляторы Bosch,Varta,A-Мega,Rocket
            <p />
            <h4>А также у нас доступно</h4>
            <i className="icon-wrench icon-white" />
            снятие и установка агрегатов
            <p />
            <i className="icon-wrench icon-white" />
            Страхование автотранспорта
          </Col>
          <Col>
            <h3>Коротко о Нас</h3>
            <br />

            <p>
              ССЦ СТАРТЕР+ - это предприятие создано для ремонта и продажи
              стартеров и генераторов, комплектующих к ним, реализации
              автозапчастей и подшипников для легковых и грузовых
              автомобилей,спецтехники иностранного и отечественного
              производства.{' '}
            </p>
            <br />
            <br />
            <p>
              CCЦ Стартер+ обладает квалифицированными кадрами и всем
              необходимым технологическим оборудованием для качественного
              выполнения ремонта в сжатые сроки. 90% комплектующих находится на
              собственном складе сервисного центра,что позволяет производить
              ремонт в течении рабочего дня, а в особых случаях в течении суток.{' '}
            </p>
          </Col>
          <Col md="1" />
        </Row>
        <Row className="align-items-start">
          <Col md="1" />
          <Col>
            <a className="btn btn-primary btn-block" href="/contacts/">
              Подробнее...
            </a>
          </Col>
          <Col>
            <a className="btn btn-primary btn-block" href="/services/">
              Подробнее...
            </a>
          </Col>
          <Col>
            <a className="btn btn-primary btn-block" href="/about/">
              Подробнее...
            </a>
          </Col>
          <Col md="1" />
        </Row>
      </div>
    );
  }
}

class SiteCopyright extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div />;
  }
}

class App extends Component {
  render() {
    return (
      <Container fluid>
        <SiteNavbar />
        <SiteHero />

        <SiteBody>
          <SiteAbout />
        </SiteBody>

        <SiteBody>
          <SiteLocation />
        </SiteBody>

        <SiteBody>
          <SiteContacts />
        </SiteBody>

        <SiteBody>
          <SiteServices />
        </SiteBody>

        <SiteBody>
          <SiteAnniversary />
        </SiteBody>

        <SiteFooter />
        <SiteCopyright />
      </Container>
    );
  }
}

export default App;
