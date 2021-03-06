/**
 * @flow
 * @file Base class for the Open With ES6 wrapper
 * @author Box
 */

import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import ES6Wrapper from './ES6Wrapper';
import ContentOpenWithReactComponent from '../components/ContentOpenWith/ContentOpenWith';

class ContentOpenWith extends ES6Wrapper {
    /**
     * Callback for executing an integration
     *
     * @return {void}
     */
    onExecute = (appIntegrationId: string): void => {
        this.emit('execute', appIntegrationId);
    };

    /**
     * Callback when an error occurs while loading or executing integrations
     *
     * @return {void}
     */
    onError = (error: Error): void => {
        this.emit('error', error);
    };

    /** @inheritdoc */
    render() {
        render(
            <ContentOpenWithReactComponent
                language={this.language}
                messages={this.messages}
                fileId={this.id}
                token={this.token}
                componentRef={this.setComponent}
                onInteraction={this.onInteraction}
                {...this.options}
                onExecute={this.onExecute}
                onError={this.onError}
            />,
            this.container,
        );
    }
}

global.Box = global.Box || {};
global.Box.ContentOpenWith = ContentOpenWith;
export default ContentOpenWith;
