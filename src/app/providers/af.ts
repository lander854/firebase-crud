import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders,AuthMethods, FirebaseListObservable} from 'angularfire2';

@Injectable()

export class AF{
public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;



    constructor(public af: AngularFire){
        this.messages = this.af.database.list('messages');
    }
        // faz o login de usuário e returna{firebase.promise<FirebaseAuthState>}
            
loginWithGoogle(){
                return this.af.auth.login({
                    provider: AuthProviders.Google,
                    method:AuthMethods.Popup,
                });
                }

//logout do usuário
logout()
{
    return this.af.auth.logout();
}

//salva a mensagem no banco de dados realtime do firebase       
sendMessage(text){
    var message={
        message:text,
        displayName: this.displayName,
        email: this.email,
        timestamp: Date.now()
    };
    this.messages.push(message);
}



}




