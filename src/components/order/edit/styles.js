import { grey400 } from 'material-ui/styles/colors';

const styles = {
  toggleDiv: {
    maxWidth: 300,
    marginTop: 40,
    marginBottom: 5
  },
  toggleLabel: {
    color: grey400,
    fontWeight: 100
  },
  checkboxDiv: {
    maxWidth: 300,
    marginTop: 40,
    marginBottom: 5
  },
  checkboxLabel: {
    color: grey400,
    fontWeight: 100
  },
  radiogroupDiv: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    maxWidth: 300,
    marginTop: 40,
    marginBottom: 10
  },
  radioLabel: {
    color: grey400,
    fontWeight: 100,
    marginRight: 30,
  },
  buttons: {
    marginTop: 30,
    float: 'right'
  },
  saveButton: {
    marginLeft: 5
  },
  approveButton: {
    marginLeft: 5,
    marginRight: 5
  },
  cancelButton: {
    marginLeft: 5,
    marginRight: 5
  },
  orderDetail: {
    fontSize: 24,
    fontWeight: 300,
    marginBottom: 20,
    marginTop: 20
  },
  products: {
    id: {
      width: '5%'
    },
    code: {
      width: '15%'
    },
    name: {
      width: '40%'
    },
    price: {
      width: '10%'
    },
    category: {
      width: '20%'
    },
    edit: {
      width: '10%'
    }
  }
};

export default styles;