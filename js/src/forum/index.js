import app from 'flarum/forum/app';
import Page from 'flarum/common/components/Page';
import Button from 'flarum/common/components/Button';

class MockApiPlayground extends Page {
    oninit(vnode) {
        super.oninit(vnode);
        
        // Default payload state
        this.payload = JSON.stringify({
            status: 200,
            message: "Connection established",
            source: "Andre Software Zero-DB Engine"
        }, null, 2);
    }

    view() {
        return (
            <div className="MockApi-Container" style="padding: 40px; max-width: 900px; margin: 0 auto;">
                <div className="MockApi-Header" style="margin-bottom: 30px;">
                    <h2 style="font-weight: 800; letter-spacing: -1px;">Live SSE Stream & Mock API</h2>
                    <p style="color: #888;">Serverless endpoint generator. No database hits, pure URL encryption.</p>
                </div>
                
                <div className="MockApi-Editor" style="margin-bottom: 20px;">
                    <textarea 
                        className="FormControl"
                        style="height: 300px; font-family: 'Fira Code', monospace; background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px;"
                        value={this.payload}
                        oninput={(e) => this.payload = e.target.value}
                    ></textarea>
                </div>
                
                <div className="MockApi-Actions" style="display: flex; gap: 10px;">
                    <Button 
                        className="Button Button--primary" 
                        onclick={this.deployEndpoint.bind(this)}>
                        Deploy Standard API
                    </Button>
                    <Button 
                        className="Button Button--danger" 
                        onclick={this.deployStream.bind(this)}>
                        Deploy SSE Stream
                    </Button>
                </div>
            </div>
        );
    }

    deployEndpoint() {
        this.executeEngine(false);
    }

    deployStream() {
        this.executeEngine(true);
    }

    executeEngine(isStream) {
        try {
           
            const parsed = JSON.parse(this.payload);
            const encoded = encodeURIComponent(JSON.stringify(parsed));
            
            
            let endpointUrl = `${app.forum.attribute('baseUrl')}/api/mock?payload=${encoded}`;
            if (isStream) endpointUrl += '&stream=true&delay=1000';
            
            window.open(endpointUrl, '_blank');
        } catch (e) {
            alert('Syntax Error: Invalid JSON payload. Check your formatting before deployment.');
        }
    }
}


app.initializers.add('andresoftware-mock-api', () => {
    app.routes.mockApi = {
        path: '/mock-api',
        component: MockApiPlayground
    };
});