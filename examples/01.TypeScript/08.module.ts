export module MongoDb {
    export class Connector {
        public connect():boolean {
            return true;
        }

        public disconnect():boolean {
            return true;
        }
    } 
}

export module RavenDb {
    export class Connector {
        public connect():boolean {
            return false;
        }

        public disconnect():boolean {
            return true;
        }
    } 
}

var connector = new MongoDb.Connector();
connector.connect();