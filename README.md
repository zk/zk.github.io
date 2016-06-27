# zkimcom

My personal site, which can be found at
[http://zacharykim.com](http://zacharykim.com).

## Overview

Static site generator. Work is done in `work` branch, `master` is used
for deployment.


## Usage

### Development

* Run `$REPO/bin/dev` to start the js / css compiler
* Open `http://localhost:8000`

### Deployment

* Commit all changes
* Run `$REPO/bin/prep-prod`, this will prep static files for deploy to gh pages and switch you to the `master` branch.
* Push changes to `origin/master`
* Changes should be live immediately


## License

Copyright (C) 2010 Zachary Kim

Distributed under the Eclipse Public License, the same as Clojure.
