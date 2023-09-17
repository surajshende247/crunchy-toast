# 🍞 Crunchy Toast - React Toast Notifications Library

Crunchy Toast is a lightweight, customizable, and easy-to-use React library for displaying toast notifications in your web applications.

## Installation

You can install the `crunchy-toast` library via npm:

```bash
npm install crunchy-toast
```

## Usage

To use Crunchy Toast in your React application, follow these steps:

1. Import the `showToast` function from the library:

```javascript
import showToast from 'crunchy-toast';
```

2. Call `showToast` to display a toast notification:

```javascript
showToast('This is a sample toast message', 'success', 3000);
```

The `showToast` function accepts three parameters:

- `message`: The text message you want to display in the toast.
- `type`: The type of toast notification (options: 'info', 'success', 'warning', 'alert').
- `duration` (optional): The duration in milliseconds for which the toast should be visible. Default is 3000ms (3 seconds).

## Examples

Here are some examples of how to use Crunchy Toast:

### Basic Toast

```javascript
showToast('This is a basic toast message', 'info');
```

### Success Toast

```javascript
showToast('Success! Your action was successful', 'success', 2000);
```

### Warning Toast

```javascript
showToast('Warning: Proceed with caution', 'warning', 4000);
```

### Alert Toast

```javascript
showToast('Alert! An error occurred', 'alert', 6000);
```

## Contributing

We welcome contributions to the Crunchy Toast library! If you find a bug or have an enhancement in mind, please open an issue or submit a pull request on our [Crunchy Toast](https://github.com/surajshende247/crunchy-toast).
