import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



class EuphoriaEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        if (this.props.defaultState!=null){
            this.setState({
                editorState: this.props.defaultState,
            })
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
        if (this.props.onEditorStateChange){
            this.props.onEditorStateChange(editorState)
        }
    };

    render() {
        const { editorState } = this.state;
        let toolbarHidden = false;
        if (this.props.readOnly){
            toolbarHidden=true;
        }
        return (

            <Editor
                toolbarHidden={toolbarHidden}
                editorState={editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'emoji', 'image', 'history'],
                }}
            />
        )
    }
}

export default EuphoriaEditor;
