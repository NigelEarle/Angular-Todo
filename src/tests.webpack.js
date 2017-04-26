import 'angular';
import 'angular-mocks';

const context = require.context('./modules/**', true, /\.js/);

context.keys().forEach(context);
