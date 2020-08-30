import React from "react";

export const OSTools = (props) =>
    <div className="screen-content__main-panel">
        <div className="screen-content__text-panel">
            <div className="screen-content__text-title">OS Tools</div>
            <div className="screen-content__text-description">
                During the course INF01142 (Sistemas Operacionais), I developed two shell applications along with two classmates - Daniel Kelling Brum and Jéssica Rocha. Here you can find a brief description of each of them and a link to their repositories. Both projects are developed using C.
            </div>
            <div className="screen-content__text-title">cthreads</div>
            <div className="screen-content__text-description">
                This is a multithread library that the user can import to their project and work with. Various functions are implemented to manage the threads (creation, locking, releasing, etc). The team has split similar group of functions (in terms of difficulty) for each member. 
                You can find the project repository <a href="http://bitbucket.org/mwolfart/sisop-i-cthreads/src">here</a>, and in order to use the library you can build the Makefile and import the file libcthread.a under the lib folder.
            </div>
            <div className="screen-content__text-title">T2FS</div>
            <div className="screen-content__text-description">
                This is a custom operational file system. It contains many functions to manage files and folders, such as listing files, creation of directories, file relocation, etc. - basically all simple commands that are present in any Unix system.
                In this project the team has also split roles, but many helper functions were implemented in order to provide a more readable code base, and some of the hardest functions were implemented by all members during a virtual coding meeting.
                You can find the project repository <a href="http://bitbucket.org/mwolfart/sisop-i-t2fs/src/master/">here</a>. In order to use the file system you can build the Makefile and import the file libt2fs.a under the lib folder.
            </div>
        </div>
    </div>;