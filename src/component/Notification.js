import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';

class Notification extends Component {


    showNotification = (message, type) => {
        this.notification.addNotification({
            title: 'Notification',
            message: message,
            level: type,
            position: 'tc',
            autoDismiss: 4
        })
    };

    prepareNotification = (action) => {
        var message = "";
        var type = "";

        switch(action){
            case  "SAVE" :
                message = 'Contact has been saved!';
                type = 'success';
                break;
            case 'EDIT' :
                message = 'Contact has been edited!';
                type = 'success';
                break;
            case 'DELETE' :
                message = 'Contact has been deleted!';
                type = 'success';
                break;
            case 'EMPTY' :
                message = 'Contact list is empty!';
                type = 'info';
                break;
            default :
               alert("error")
        }

        this.showNotification(message, type);
    };

    render = () => {
        var style = {
            NotificationItem: {
                DefaultStyle: {
                    fontSize: '20px',
                    marginTop: '25%'
                },
                success : {
                    color: 'rgb(94, 164, 0)'
                },
                info: {
                    color: 'rgb(54, 156, 199)'
                }
            },
        };

        return (
            <NotificationSystem ref={notification => this.notification = notification} style={style}/>
        )
    }
}

export default Notification;