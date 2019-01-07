/*
 * Copyright 2017 balena
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

const path = require('path')

module.exports = {
  title: 'Push a mono-container to the application',
  run: async function (context) {
    const hash = await context.utils.pushAndWaitRepoToBalenaDevice({
      path: path.join(context.tmpdir, 'test'),
      url: 'https://github.com/balena-io-projects/balena-cpp-hello-world.git',
      uuid: context.balena.uuid,
      key: context.sshKeyPath,
      balena: context.balena,
      applicationName: context.balena.application.name
    })

    this.resolveMatch(context.balena.sdk.getDeviceCommit(context.balena.uuid), hash)
  }
}
