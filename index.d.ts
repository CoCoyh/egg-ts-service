// Type definitions for index.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace BaseService.prototype{
	// BaseService.prototype.sqlRenderPage.!ret
	
	/**
	 * 
	 */
	interface SqlRenderPageRet {
				
		/**
		 * 
		 */
		list : Promise;
		
		/**
		 * 
		 */
		pagination : {
						
			/**
			 * 
			 */
			page : number;
						
			/**
			 * 
			 */
			size : number;
						
			/**
			 * 
			 */
			total : number;
		}
	}
}
declare namespace BaseService.prototype{
	// BaseService.prototype.page.!ret
	
	/**
	 * 
	 */
	interface PageRet {
		
		/**
		 * 
		 */
		pagination : {
						
			/**
			 * 
			 */
			page : number;
						
			/**
			 * 
			 */
			size : number;
		}
	}
}
declare namespace BaseService.prototype{
	// BaseService.prototype.addOrUpdate.!0
	
	/**
	 * 
	 */
	interface AddOrUpdate0 {
	}
}
declare namespace BaseService.prototype{
	// BaseService.prototype.renderPage.!1
	
	/**
	 * 
	 */
	interface RenderPage1 {
				
		/**
		 * 
		 */
		page : number;
				
		/**
		 * 
		 */
		size : number;
	}
}

/**
 * 基础配置
 */
declare var conf : {
		
	/**
	 * 
	 */
	size : number;
	
	/**
	 * 
	 */
	errTips : {
				
		/**
		 * 
		 */
		noEntity : string;
	}
}

/**
 * 服务基类
 */
declare interface BaseService {
		
	/**
	 * 
	 * @param ctx 
	 */
	new (ctx : any);
		
	/**
	 * 执行SQL并获得分页数据
	 * @param sql 执行的sql语句
	 * @param query 分页查询条件
	 * @param sql 
	 * @param query 
	 * @return  
	 */
	sqlRenderPage(sql : string, query : any): BaseService.prototype.SqlRenderPageRet;
		
	/**
	 * 原生查询
	 * @param sql
	 * @param params
	 * @param sql 
	 * @param params 
	 */
	nativeQuery(sql : string, params : Array<any>): void;
		
	/**
	 * 参数安全性检查
	 * @param params
	 * @param params 
	 * @return  
	 */
	paramSafetyCheck(params : string): boolean;
		
	/**
	 * 获得查询个数的SQL
	 * @param sql
	 * @param sql 
	 * @return  
	 */
	getCountSql(sql : string): string;
		
	/**
	 * 单表分页查询
	 * @param entity
	 * @param query
	 * @param option
	 * @param query 
	 * @param option 
	 * @param entity 
	 * @return  
	 */
	page(query : any, option : any, entity : any): BaseService.prototype.PageRet;
		
	/**
	 * 所有数据
	 * @param entity
	 * @param entity 
	 */
	list(entity : any): void;
		
	/**
	 * 新增/修改
	 * @param entity 实体
	 * @param param 数据
	 * @param param 
	 * @param entity 
	 */
	addOrUpdate(param : BaseService.prototype.AddOrUpdate0, entity : any): void;
		
	/**
	 * 根据ID获得信息
	 * @param entity 实体
	 * @param id id
	 * @param id 
	 * @param entity 
	 */
	info(id : any, entity : any): void;
		
	/**
	 * 删除
	 * @param entity
	 * @param ids
	 * @param ids 
	 * @param entity 
	 */
	delete(ids : any, entity : /* BaseService.prototype.+BaseService */ any): void;
		
	/**
	 * 修改数据之后执行的操作，修改数据包括默认的：'add'、'update'、'delete' 等方法
	 * @param data
	 * @returns {Promise<void>}
	 * @param data 
	 */
	modifyAfter(data : any): void;
		
	/**
	 * query
	 * @param data
	 * @param query
	 * @param data 
	 * @param query 
	 * @return  
	 */
	renderPage(data : any, query : BaseService.prototype.RenderPage1): /* BaseService.prototype.page.!ret */ any;
		
	/**
	 * 构造分页查询条件
	 *  @param entity 实体
	 *  @param query 查询条件
	 *  @param option 配置信息
	 * @param query 
	 * @param option 
	 * @param entity 
	 */
	getPageFind(query : any, option : any, entity : any): void;
		
	/**
	 * 设置sql
	 * @param condition 条件是否成立
	 * @param sql sql语句
	 * @param params 参数
	 * @param condition 
	 * @param sql 
	 * @param params 
	 * @return  
	 */
	setSql(condition : any, sql : any, params : any): any;
		
	/**
	 * 获得上下文
	 * @return  
	 */
	getContext(): /* !this.ctx */ any;
		
	/**
	 * 获得ORM操作对象
	 * @return  
	 */
	getRepo(): /* !this.ctx.repo */ any;
		
	/**
	 * 获得ORM管理
	 */
	getOrmManager(): void;
		
	/**
	 * 获得ORM连接类
	 */
	getOrmConnection(): void;
		
	/**
	 * 获得query请求参数
	 */
	getQuery(): void;
		
	/**
	 * 获得body请求参数
	 */
	getBody(): void;
		
	/**
	 * 
	 */
	sqlParams : Array<number>;
}
