import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  installPackagesTask,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { UtilLabGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/workspace/generators';


interface NormalizedSchema extends UtilLabGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

export default async function( tree: Tree,options: UtilLabGeneratorSchema ) {
    await libraryGenerator(tree, {
      name: `util-${ options.name }`,
      tags: `type:util, scope:${options.directory}`
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
