import styled from 'styled-components'

const DISPLAY4 = styled.div`
font-size: 112px;
color: rgba(0,0,0,.54);
`

const DISPLAY3 = styled.div`
font-size: 56px;
color: rgba(0,0,0,.54);
`
const DISPLAY2 = styled.div`
font-size: 45px;
line-height: 48px;
color: rgba(0,0,0,.54);
`

const DISPLAY1 = styled.div`
font-size: 34px;
line-height: 40px;
color: rgba(0,0,0,.54);
`

const H1 = styled.h1`
  font-size: 45px;
  line-height: 48px;
  color: rgba(0,0,0,.54);
`;

const H2 = styled.h2`
  font-size: 34px;
  line-height: 40px;
  color: rgba(0,0,0,.54);
`;

const H3 = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: rgba(0,0,0,.85);
`;

const HEADLINE = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: rgba(0,0,0,.85);
  text-transform: uppercase;
  font-weight: 600;
`;

const H4 = styled.h4`
  font-size: 21px;
  font-weight: 400;
  color: rgba(0,0,0,.85);
  letter-spacing: 0.05px;
`;

const TITLE = styled.h4`
  font-size: 21px;
  font-weight: 400;
  color: rgba(0,0,0,.85);
  letter-spacing: 0.05px;
`;

const H5 = styled.h5`
  font-size: 17px;
  line-height: 28px;
  color: rgba(0,0,0,.87);
  letter-spacing: 0.1px;
`;

const SUBHEADING = styled.div`
  font-size: 17px;
  line-height: 28px;
  color: rgba(0,0,0,.87);
  letter-spacing: 0.1px;
`;

const H6 = styled.h6`
  font-size: 13px;
  line-height: 20px;
  color: rgba(0,0,0,.54);
  font-weight: 400;
  letter-spacing: 0.2px;
`;

const DESC = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: rgba(0,0,0,.54);
  font-weight: 400;
  letter-spacing: 0.2px;
`

const CAPTION = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: rgba(0,0,0,.6);
  font-weight: 400;
  letter-spacing: 0.2px;
`

const Enable = styled.span`
  color: #008272;
`
const Disable = styled.span`
  color: #e81123;
`

const PageTitle = styled.div`
  display: block;
  border-bottom: 1px solid #f2f2f2;
  padding: 9px 0;
  margin-bottom: 30px;
  background: #f2f2f2;
`

const HR = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top-width: 1px;
  border-top-color: #eeeeee;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  border-style: ${props => props.border ? props.border : 'dashed'};
`

export {
  H1, H2, H3, H4, H5, H6,
  HR,
  Enable, Disable,
  DESC, HEADLINE, TITLE, SUBHEADING, CAPTION,
  DISPLAY4, DISPLAY3, DISPLAY2, DISPLAY1, PageTitle
};
