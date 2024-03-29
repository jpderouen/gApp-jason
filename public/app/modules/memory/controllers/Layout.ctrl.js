(function () {
    /**
     * Services the general look/feel of the WordShuffle module
     *
     * @param    {App_Common_Models_SysMan}  SysMan  - reference to the SysMan singleton
     * @this        Memory_Controllers_Layout
     */
    function Memory_Controllers_Layout(SysMan) {
        var self = this;		// required alias to address resolution to immediate scope

        /**
         * @method   isActive
         * Identifies if controller parameter is active
         *
         * @public
         * @param    {string}  ctrl               - controller string
         * @return   {boolean}
         */
        self.isActive = function(ctrl){
            return SysMan.state.controller == ctrl;
        };

        /*******************
         * CONSTRUCTOR LOGIC
         *******************/
        SysMan.Logger.entry('START ' + self.constructor.name + '.construct()', self.constructor.name);

        SysMan.Logger.entry('END ' + self.constructor.name + '.construct()', self.constructor.name);
    }

    // Explicitly define the constructor
    Memory_Controllers_Layout.prototype.constructor = Memory_Controllers_Layout;

    Memory_Controllers_Layout.$inject = [
        'App_Common_Models_SysMan'
    ];

    angular.module('App_WordShuffle').controller('Memory_Controllers_Layout', Memory_Controllers_Layout);
})();
