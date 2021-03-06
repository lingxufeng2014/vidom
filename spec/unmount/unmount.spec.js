import { mount, unmount } from '../../src/vidom';
import { h } from '../helpers';

describe('unmount', () => {
    let domNode;

    beforeEach(() => {
        document.body.appendChild(domNode = document.createElement('div'));
    });

    afterEach(() => {
        document.body.removeChild(domNode);
    });

    describe('callbacks', () => {
        it('should properly call callback on unmount', function(done) {
            mount(domNode, h('div'), () => {
                unmount(domNode, () => {
                    expect(domNode.childNodes.length).to.equal(0);
                    done();
                });
            });
        });

        it('should properly call callback if there\'s no mounted tree', function(done) {
            unmount(domNode, () => {
                done();
            });
        });
    });
});
