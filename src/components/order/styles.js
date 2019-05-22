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
      code: {
        width: '20%'
      },
      name: {
        width: '40%'
      },
      total: {
        width: '10%'
      },
      currency: {
        width: '10%'
      },
      edit: {
        width: '10%'
      }
    }
};

export default styles;