import { grey500 } from 'material-ui/styles/colors';

const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: grey500
    },
    columns: {
      id: {
        width: '10%'
      },
      name: {
        width: '40%'
      },
      price: {
        width: '20%'
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